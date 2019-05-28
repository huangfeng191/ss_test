
... 数组解构  [{},{},{}] => {},{},{}

对象合并
Object.assign(...b)


<!-- 取对象的值，形成数组 -->
Object.values(Object.assign(...b))


Object.values(a.formDefinition.formDefinitions)

>判断对象是否未空，
 Object.values(option||{}).length==0