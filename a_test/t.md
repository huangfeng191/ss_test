```sql
select a.id ,a.name ,a.parentId "p_id", b.name "p_name" ,b.parentId "pp_id"  from 
(select * from sys_menu t  where  isolation=3 and type=1)a,
(select * from sys_menu t  where  isolation=3 and type!=2)b where a.parentId =b.id 



select c.*,d.name "pp_name" from (select a.id modal_id,a.name modal_name,a.parentId "p_id", b.name "p_name" ,b.parentId "pp_id"  from 
(select * from sys_menu t  where  isolation=3 and type=1)a,
(select * from sys_menu t  where  isolation=3 and type!=2)b where a.parentId =b.id )c,
(select * from sys_menu t  where  isolation=3 and type!=2) d  where c.pp_id=d.id



select c.*,d.name "pp_name" from (select a.id modal_id,a.name modal_name,a.parentId "p_id", b.name "p_name" ,b.parentId "pp_id"  from 
(select * from sys_menu t  where  isolation=3 and type=1)a,
(select * from sys_menu t  where  isolation=3 and type!=2)b where a.parentId =b.id )c left join 
(select * from sys_menu t  where  isolation=3 and type!=2) d  on c.pp_id =d.id

```