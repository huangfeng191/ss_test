


| purpose              | steps                         | desc                                     | rate |
| -------------------- | ----------------------------- | ---------------------------------------- | ---- |
| checkout single file | git checkout <commit> <file > | version is not change,merely file change | **   |




# ss_back 文件不更新

git update-index --assume-unchanged src/main/resources/Config-dev.properties

git update-index --assume-unchanged src/main/webapp/META-INF/war-tracker


git update-index --no-assume-unchanged 

# 删除本地分支 
# 查看分支
git branch -a

# 删除分支
git branch -d delete