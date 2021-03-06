#-*- coding: utf-8 -*-
global a
#总结：全局变量的使用是为了使我们在一个类或一个函数中使用由函数返回的变量，
#并进行复杂的计算过程而使用。而对于一个函数的局部变量，则只在一个函数内部是
#可使用的，而如果需要跨越不同的函数或者类则需要在基础函数中返回一个该值,在
#下一个函数中运行其方法才能获取该值进行计算,如果程序不复杂在一个类中可以解决
#全局变量会为我们节省不少的时间，以及内存空间。

def a():
    # 这里我们引用设置的全局变量a，写在函数中
    global a
    a = 2
    a += 1
    # 预期的a = 3
    print a


def do():

    # 这里由于我们需要对定义的全局变量进行重新计算，我们这次引用a
    global a
    a()
    a += 1
if __name__ == "__main__":
    do()
# 如果我们需要在最后的main函数中，输出由do()函数最终计算的变量a,则我们必须在这里在此引用这个变量a
    # 预期的值4
    print a
# 现在我们再次运行程序这时，我们看到的数值结果与预期结果一致，为3,4
