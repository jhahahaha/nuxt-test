#!/bin/bash
msg=$1
branch=$2
# error=$3
# echo ${msg} ${branch}
if [ -n "$msg" ]; then
   git add -A
   git commit -m"${msg}"
   git fetch origin "${branch}"
   git pull origin "${branch}"
    if [ $? == 0 ]; then
      git push origin "${branch}"
      npm run dev
      echo "项目已启动"
    else
      echo "请解决冲突"
    fi
else
    echo "请添加注释再来一遍"
fi

# git pull origin master

# if [ -n "$error" ]; then
#    echo $error
#  else
#    echo "成功了"
# fi
# aa=$(git add -A 2>&1)
# echo $aa
# cat: /tmp/aa: No such file or directory
