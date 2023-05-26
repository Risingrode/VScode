# sql

## mysql安装

累死了，之前的mysql无法使用，现在又安装了一个。
需要注意:
1.my.ini文件的配置
2.环境变量中，mysql的配置尽量靠前点

## DDL
操作库
```sql
-- 创建库
create database db1;
-- 创建库是否存在，不存在则创建
create database if not exists db1;
-- 查看所有数据库
show databases;
-- 查看某个数据库的定义信息 
show create database db1; 
-- 修改数据库字符信息
alter database db1 character set utf8; 
-- 删除数据库
drop database db1; 
```

操作表

```sql
--创建表
create table student(
    id int,
    name varchar(32),
    age int ,
    score double(4,1),
    birthday date,
    insert_time timestamp
);
 
-- 查看表结构
desc 表名;
-- 查看创建表的SQL语句
show create table 表名;
-- 修改表名
alter table 表名 rename to 新的表名;
-- 添加一列
alter table 表名 add 列名 数据类型;
-- 删除列
alter table 表名 drop 列名;
-- 删除表
drop table 表名;
drop table  if exists 表名 ;
```