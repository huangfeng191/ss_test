
function cal_holdover(Holdover_Duration, Holdover_Time_Error, Prediction_Flag)
{

    var oscid = document.getElementById("oscid").innerHTML;

Holdover_Duration = Holdover_Duration * 86400;
Holdover_Time_Error = Holdover_Time_Error * 1000000.0;
    /*                  
    if ( oscid == "High performance Rubidium Oscillator"){ osc_type= 0; }
    else if ( oscid== "Rubidium Oscillator"){ osc_type= 1;}
    else if ( oscid== "OCXO Oscillator"){ osc_type= 2;}
    else if ( oscid== "Mini OCXO Oscillator"){ osc_type= 3;}
    */
    // Parameters associated with each oscillator type
    var Temperature_Sensitivity; // Temperature Sensitivity ppb per degree C
    var Noise_Floor; // Noise Floor of oscillator in ppb
    var Drift;   //Oscillator drift rate ppb per month 
    var Time_Error_Floor; //best case time dispersion reported
    var DTR; 
    var Crest_Factor;
    var D; //duty cycle
    var A,B,C;
    var a_comp;
    var dtemp, delta_err;
    var i;
    //var osc_type = OCXO_Type();
                    
    switch (oscid)
    {
        case "Standard Oscillator":
            Temperature_Sensitivity = MINI_TS; // Temperature Sensitivity ppb per degree C
            Noise_Floor = MINI_NF; // Noise Floor of oscillator in ppb
            Drift = MINI_D;   //Oscillator drift rate ppb per month 
            Time_Error_Floor = 50.0;
            break;
        case "OCXO Oscillator":
            Temperature_Sensitivity = OCXO_TS; // Temperature Sensitivity ppb per degree C
            Noise_Floor = OCXO_NF; // Noise Floor of oscillator in ppb
            Drift = OCXO_D;   //Oscillator drift rate ppb per month 
            Time_Error_Floor = 30.0;
            break;
        case "Rubidium Oscillator":
            Temperature_Sensitivity = RB_35_TS; // Temperature Sensitivity ppb per degree C
            Noise_Floor = RB_35_NF; // Noise Floor of oscillator in ppb
            Drift = RB_35_D;   //Oscillator drift rate ppb per month 
            Time_Error_Floor = 10.0;
            break;
        case "High performance Rubidium Oscillator":
            Temperature_Sensitivity = RB_37_TS; // Temperature Sensitivity ppb per degree C
            Noise_Floor = RB_37_NF; // Noise Floor of oscillator in ppb
            Drift = RB_37_D;   //Oscillator drift rate ppb per month 
            Time_Error_Floor = 10.0;
            break;
        default:
            //return(-1);  unknown local oscillator
            break;
    }

    DTR = 2.8; //default value for diurnal temperature range
    Crest_Factor = 3.0; //default crust factor (peak to rms ratio) for noise term
    D = 50.0; //default 50% diurnal cycle shape assumed
    // Prediction Flag Code
    if (Prediction_Flag)
    {
        // TODO add operational code to overide drift and DTR  settings
    }
    else
    {
        // Null Case
    }
    // Update B and C parameters
    A = (9.9693*D*D - 1134.8*D + 45191)*DTR*Temperature_Sensitivity;
    B = 1.20112241 *Crest_Factor*Noise_Floor;
    C = 1.92901e-7*Drift;
    if (Holdover_Duration > 0.0) // Normal calculation mode
    {
        if (Holdover_Duration < 86400)
        {
            a_comp = Holdover_Duration/86400;
        }
        else
        {
            a_comp = 1.0;
        }
        Holdover_Time_Error = A * a_comp + B * Holdover_Duration + C * (Holdover_Duration * Holdover_Duration);
        Holdover_Time_Error += Time_Error_Floor;
        //return(1);


        var timeerr = Holdover_Time_Error / 1000000;
timeerr = timeerr.toFixed(6);
document.getElementById("txtperiod").value = timeerr;        
        return;
    }
    else if (Holdover_Time_Error > 0.0) // Inverse calculation mode
    {
        // TODO implement mode need to address unknown a_comp
        a_comp = 0.05; // seed a_comp with starting guess
        Holdover_Time_Error = Holdover_Time_Error-Time_Error_Floor;
        if (Holdover_Time_Error < 5.0)
        {
            Holdover_Time_Error = 5.0;
        }
        for (i=0; i<25; i++)
        {
            delta_err = -Holdover_Duration;
            dtemp = (B*B - 4.0*(A*a_comp-Holdover_Time_Error)*C);
            if (dtemp <= 0.0)
            {
                //return(-3);
                document.getElementById("txtdays").value = '';
                return;
            }
            Holdover_Duration = (-B + Math.sqrt(dtemp))/(2.0*C);
            delta_err += Holdover_Duration;
            if ((delta_err < 10) && (delta_err > -10))
            {

var holddur = Holdover_Duration/86400;
holddur = holddur.toFixed(6);
document.getElementById("txtdays").value = holddur;

                return true;
            }
            if (Holdover_Duration < 86400)
            {
                a_comp = Holdover_Duration/86400;
            }
            else
            {
                a_comp = 1.0;
            }
        }
        //return(-2);
        document.getElementById("txtdays").value = '';
        return;
    }
}