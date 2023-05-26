# 程序员技能：Git

### 一、创建远程仓库

在码云中创建一个仓库（项目）

### 二、克隆（clone）远程仓库到本地

``` bash
git clone url #将远程仓库clone到本地
```

### 三、将本地仓库推送至远程仓库

``` bash
git status #查看仓库状态
git add txt1 # 将单个文件从编辑区添加到暂存区
git commit -m "i" #将文件从暂存区提交到分支
git push origin master #将本地仓库推送到远程仓库
```

### 四、处理冲突

``` bash
git pull origin master #拉取远程仓库，如有冲突需要处理
```

### 五、版本控制

``` bash
# 显示所有提交过的版本信息
git log
# 恢复版本，版本号写前几位就可以
git reset --hard <版本号>
# 可以查看所有分支的所有操作记录
git reflog
```

### 六、分支管理

``` bash
# 查看分支，默认只有master分支
git branch
# 创建teacher分支
git branch teacher
# 切换分支
git checkout teacher
# 合并分支：切换至master分支，
git merge dev
# 本地分支推送至远程分支:
git push origin feature-branch:feature-branch
# 远程分支拉倒本地：
git checkout -b feature-branch origin/feature-branch
```

### 七、markdown语法

1. 标题
2. 段落
3. 列表
4. 代码
5. 文字加粗
6. 兼容html：如果想看html代码，可以在两侧加反引号。
7. 图片
8. 链接
9. 表格
10. 区块
11. 导出

>  好好学习，天天向上
>
> 天下大事，分久必合，合久必分





