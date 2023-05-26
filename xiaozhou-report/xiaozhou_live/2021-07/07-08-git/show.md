# 程序员技能：Git版本控制工具

### 一、创建远程仓库

1. gitlab
2. github
3. gitee（码云）

### 二、克隆（clone）远程仓库到本地

``` bash
#本地没有仓库，线上有仓库，将线上仓库克隆到本地。
git clone url
```

### 三、将本地仓库推送至远程仓库

``` bash
# 查看状态：编辑区、暂存区、分支
git status 
# 将file文件添加到暂存区
git add file
# 将所有编辑区的文件添加到暂存区
git add .
# 将所有暂存区的文件提交到分支上
git commit -m "备注信息"
# 将本地分支上的代码提交到远程分支
git push origin master
```

### 四、处理冲突

手动修改

### 五、版本控制

``` bash
git reset --hard 版本号 #切换不同的版本
git reflog # 查看版本信息
```

### 六、分支管理 

``` bash
git branch #查询分支
git branch xiaozhou #添加xiaozhou分支
git checkout xiaozou #切换分支
git merge xiaozhou #切换到master分支，然后执行，可以合并分支
git push origin xiaozhou:xiaozhou #第一次将本地的xiaozhou分支推送到远程晓舟分支。
git push origin xiaozhou #后续提交就不用写冒号
```

### 七、markdown语法

