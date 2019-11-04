# Git

`Git`是一个分布式版本控制系统(`Distributed Version Control System - DVCS`)。

解决 代码分享和一人多任务
工作流：Feature Branching
1. 任何新的功能（feature）或 bug 修复全都新建一个 branch 来写；
2. branch 写完后，合并到 master，然后删掉这个 branch。

### 分支提交
> git add -p

`commit`后面的数字是其`SHA-1`校验和

创建分支
> git checkout -b feature

删除分支
> git branch -d feature
> git push origin -d feature # 用 -d 参数把远程仓库的 branch 也删了

改成大写可以删除未合并到master的分支

> git branch -D feature

checkout
1、checkout 的本质是签出指定的 commit，所以你不止可以切换 branch，也可以直接指定 commit 作为参数，来把 HEAD 移动到指定的 commit。
2. reset 在移动 HEAD 时会带着它所指向的 branch 一起移动，而 checkout 不会。

stash
> 注意：没有被 track 的文件（即从来没有被 add 过的文件不会被 stash 起来，因为 Git 会忽略它们。如果想把这些文件也一起 stash，可以加上 `-u` 参数，它是 `--include-untracked` 的简写。就像这样：
git stash -u

### 分支合并

> 说明：在 Git 中，有两个「偏移符号」： ^ 和 ~。
> ^ 的用法：在 commit 的后面加一个或多个 ^ 号，可以把 commit 往回偏移，偏移的数量是 ^ 的数量。例如：master^ 表示 master 指向的 commit 之前的那个 commit； HEAD^^ 表示 HEAD 所指向的 commit 往前数两个 commit。
> ~ 的用法：在 commit 的后面加上 ~ 号和一个数，可以把 commit 往回偏移，偏移的数量是 ~ 号后面的数。例如：HEAD~5 表示 HEAD 指向的 commit往前数 5 个 commit。

> git merge

![](https://blog1.cdn.bcebos.com/ccc.png)

merge会将所有当前分支的提交合并，然后提交一个commit在主分支上

`rebase`会以当前`commit`为基准点 将另一个分支上的提交复刻到该分支上
`git rebase master` 后还需切换到master上，用git merge 更新最近代码

> git merge -abort
废弃所有提交

<br>
rebase的另一个用法是用于修改非最新commit的错误提交
1. 使用方式是 git rebase -i [目标commit]；
2. 在编辑界面中指定需要操作的 commits 以及操作类型；
3. 操作完成之后用 git rebase --continue 来继续 rebase 过程。

> git rebase --onto [目标commit] [起点commit] branch
把起点commit后的提交移到目标commit的分支上

> git reset --hard HEAD^
撤销一次提交

reset会移动HEAD所指向的branch
reset 的三种参数：
--hard：重置位置的同时，清空工作目录的所有改动；
--soft：重置位置的同时，保留工作目录和暂存区的内容，并把重置 HEAD 的位置所导致的新的文件差异放进暂存区。
--mixed（默认）：重置位置的同时，保留工作目录的内容，并清空暂存区。

### 历史记录

> git log -p
-p 查看log的详细历史

> git log --stat
查看简要统计

> git show [commit] [file-name]
查看某个commit的改动内容

> git diff --staged
比对暂存区和上一条提交

> git diff
比对工作目录和暂存区

> git diff HEAD
比对工作目录和上一条提交

> git reflog [branch]
查看 Git 仓库中的引用的移动记录

