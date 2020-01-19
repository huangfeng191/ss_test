


| purpose              | steps                         | desc                                     | rate |
| -------------------- | ----------------------------- | ---------------------------------------- | ---- |
| checkout single file | git checkout <commit> <file > | version is not change,merely file change | **   |




# ss_back 文件不更新
# 此处使用 relative path
## ignore 
git update-index --assume-unchanged ../resources/Config-dev.properties
git update-index --assume-unchanged  ../webapp/META-INF/war-tracker

## recover
git update-index --no-assume-unchanged ../resources/Config-dev.properties
git update-index --no-assume-unchanged  ../webapp/META-INF/war-tracker

# 删除本地分支 
# 查看分支
git branch -a

# 删除分支
git branch -d delete