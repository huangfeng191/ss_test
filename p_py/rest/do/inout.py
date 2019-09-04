# encoding: utf-8

#######################Base64加密解密(可逆)###################
# Base64编码，64指A-Z、a-z、0-9、+和/这64个字符，还有“=”号不属于编码字符，而是填充字符
import  base64
###加密#########

s1 = base64.encodestring('hello world')

###解密################
s2 = base64.decodestring(s1)
print s1, s2

