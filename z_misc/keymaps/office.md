# 常用快捷键



F12在编辑好Excel 或Word文档，可“”；当在网页页面，F12为打开调试环境。


| shortuct  | excel       | rating |
|-----------|-------------|--------|
| F2 then e | enable edit | *****  |


| shortuct   | 通用应用程序           | rating |
|------------|------------------|--------|
| CTRL+F6    | 切换到当前应用程序中的下一个文本 | *****  |
| alt or F10 | 查看快捷键            |        |
| F12        | 另存为              | *****  |




# word 中 删除 所有超链接 


打开Word2013，按快捷键 Alt+F11，打开Visual Basic编辑器，在Visual Basic编辑器中选择插入->模块，之后会出现一个模块1的编写窗口，把以下代码粘贴进去。

Sub 删除超链接RemoveHyperlinks()
    Dim oField As Field
    For Each oField In ActiveDocument.Fields
        If oField.Type = wdFieldHyperlink Then
              oField.Unlink
        End If
    Next
    Set oField = Nothing
End Sub

    如果要把这个宏保存在Word软件中，在Visual Basic 编辑器中，点击文件--保存Normal；如果只是一次使用，就跳过这一步。之后关闭Visual Basic 编辑器回到Word中，视图--宏--查看宏，打开宏对话框，会发现多了一个名字叫删除超链接RemoveHyperlinks的宏，选中这个宏，点一下“运行”按钮，Wrod文档中所有的超级链接就都删除掉了。
    