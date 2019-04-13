# encoding: utf-8

#######################Base64加密解密(可逆)###################
# Base64编码，64指A-Z、a-z、0-9、+和/这64个字符，还有“=”号不属于编码字符，而是填充字符
import  base64



def lashBase64(content):
    _lash = base64.encodestring(content)
    return _lash

def unlashBase64(content):
    _unlash = base64.decodestring(content)
    return _unlash

def lashHex(content):
    _lash = (content or "").encode("hex")
    return _lash

def unlashHex(content):
    _unlash = (content or "").decode("hex")
    return _unlash