// #include<iostream>
// using namespace std;
// const int N=100;
// int a[N];
// bool st[N];
// int n;
// int count;

// void Print(){
//     for(int i=0;i<n;i++)
//         if(st[i])
//             cout<<a[i]<<" ";
//     cout<<endl;
//     count++;
// }

// void backup(int u){
//     if(u==n)    return ;

//     Print();   
//     st[u]=true;    

//     backup(u+1);
//     st[u]=false;
//     backup(u+1);

// }


// int main(){
//     cout<<"输入有多少个数字："<<endl;
//     cin>>n;
//     cout<<"输入元素："<<endl;
//     for(int i=0;i<n;i++)
//         cin>>a[i];
//     backup(0);
//     cout<<"总共子集个数是："<<count<<endl;
//     return 0;
// }



#include<iostream>
using namespace std;
const int N=100;
int a[N];
bool st[N];
int n;
int count;

void Print(int k, int cnt){
    if(cnt == k){
        for(int i=0;i<n;i++)
            if(st[i])
                cout<<a[i]<<" ";
        cout<<endl;
        count++;
        return;
    }
}

void backup(int u, int k, int cnt){
    if(cnt + (n-u+1) < k) return; // pruning
    if(cnt == k){
        Print(k, cnt);
        return;
    }
    if(u==n)    return ;

    st[u]=true;    
    backup(u+1, k, cnt+1);
    st[u]=false;
    backup(u+1, k, cnt);

}


int main(){
    cout<<"输入有多少个数字："<<endl;
    cin>>n;
    cout<<"输入元素："<<endl;
    for(int i=0;i<n;i++)
        cin>>a[i];
    int k;
    cout<<"输入子集大小："<<endl;
    cin>>k;
    backup(0, k, 0);
    cout<<"总共子集个数是："<<count<<endl;
    return 0;
}

/*
#include<iostream>
using namespace std;
const int N=100;//设定数组最大长度
int a[N];//这个数组用来存数字
bool st[N];//标记数组  与a[N]数组进行映射
int n;//你要输入几个数字
int count;//记录你输出有多少个结果

//注意：上面的是全局变量，需要了解他们的特性哦

void Print(){//输出函数
    for(int i=0;i<n;i++)
        if(st[i])//这是标记数组的作用
            cout<<a[i]<<" ";
    cout<<endl;
    count++;//每调用一次这个函数，就要+1
    return;
}

void backup(int u){

    if(u==n)    return ;//说明到达叶子节点  直接当前结束路线，还有其它路线没有结束哦
    st[u]=true;//对第u个数标记为真，等会就把他输出出来    对应那个二叉树的话是：在第u个节点那里，往左走
    Print();//直接输出结果
    backup(u+1);//递归到下一层
    st[u]=false;//往左走
    backup(u+1);//递归到下一层
}

int main(){
    cout<<"输入有多少个数字："<<endl;
    cin>>n;
    cout<<"输入元素："<<endl;
    for(int i=0;i<n;i++)
        cin>>a[i];
    
    //上面的应该都会哦  普通的输入输出
    backup(0);//调用回溯算法

    cout<<"总共子集个数是："<<count<<endl;
    return 0;
}*/