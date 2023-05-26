Typora是一款支持Markdown的编辑器，亲测非常好用。之前发CSDN博客也都是先在Typora上完成，然后直接导入到CSDN。最近在数学公式编辑上遇到了点麻烦，在此总结了常用的公式编辑方法，旨在文章更加的美观规范。

1. 打开Typora选择数学模块
点击“段落”—>“公式块”
快捷键Ctrl+Shift+m
“$$”+回车
以上三种方式都能打开数学公式的编辑栏，如下：


2. 添加数学公式
输出美观规范的数学公式，要清楚它们的格式和代码，在编辑栏中输入代码，对应的公式会在下面实时显示，如：


3. 常用公式的代码
上/下标

算式	Markdown
$x^2 $	x^2
$y_1 $	y_1
分式

算式	Markdown
1 / 2 1/21/2	1/2
1 2 \frac{1}{2} 
2
1

 	\frac{1}{2}
省略号

省略号	Markdown
⋯ \cdots⋯	\cdots
开根号

算式	Markdown
2 \sqrt{2} 
2

 	\sqrt{2}
矢量

算式	Markdown
a ⃗ \vec{a} 
a
 	\vec{a}
积分

算式	Markdown
∫ x d x \int{x}dx∫xdx	\int{x}dx
∫ 1 2 x d x \int_{1}^{2}{x}dx∫ 
1
2

 xdx	\int_{1}^{2}{x}dx
极限

算式	Markdown
lim ⁡ a + b \lim{a+b}lima+b	\lim{a+b}
lim ⁡ n → + ∞ \lim_{n\rightarrow+\infty}lim 
n→+∞

 	\lim_{n\rightarrow+\infty}
累加

算式	Markdown
∑ a \sum{a}∑a	\sum{a}
∑ n = 1 100 a n \sum_{n=1}^{100}{a_n}∑ 
n=1
100

 a 
n

 	\sum_{n=1}^{100}{a_n}
累乘

算式	Markdown
∏ x \prod{x}∏x	\prod{x}
∏ n = 1 99 x n \prod_{n=1}^{99}{x_n}∏ 
n=1
99

 x 
n

 	\prod_{n=1}^{99}{x_n}
希腊字母

大写	Markdown	小写	Markdown
A AA	A	α \alphaα	\alpha
B BB	B	β \betaβ	\beta
Γ \GammaΓ	\Gamma	γ \gammaγ	\gamma
Δ \DeltaΔ	\Delta	δ \deltaδ	\delta
E EE	E	ϵ \epsilonϵ	\epsilon
ε \varepsilonε	\varepsilon
Z ZZ	Z	ζ \zetaζ	\zeta
H HH	H	η \etaη	\eta
Θ \ThetaΘ	\Theta	θ \thetaθ	\theta
I II	I	ι \iotaι	\iota
K KK	K	κ \kappaκ	\kappa
Λ \LambdaΛ	\Lambda	λ \lambdaλ	\lambda
M MM	M	μ \muμ	\mu
N NN	N	ν \nuν	\nu
Ξ \XiΞ	\Xi	ξ \xiξ	\xi
O OO	O	ο \omicronο	\omicron
Π \PiΠ	\Pi	π \piπ	\pi
P PP	P	ρ \rhoρ	\rho
Σ \SigmaΣ	\Sigma	σ \sigmaσ	\sigma
T TT	T	τ \tauτ	\tau
Υ \UpsilonΥ	\Upsilon	υ \upsilonυ	\upsilon
Φ \PhiΦ	\Phi	ϕ \phiϕ	\phi
φ \varphiφ	\varphi
X XX	X	χ \chiχ	\chi
Ψ \PsiΨ	\Psi	ψ \psiψ	\psi
Ω \OmegaΩ	\Omega	ω \omegaω	\omega
三角函数

三角函数	Markdown
sin ⁡ \sinsin	\sin
对数函数

算式	Markdown
ln ⁡ 2 \ln2ln2	\ln2
log ⁡ 2 8 \log_28log 
2

 8	\log_28
lg ⁡ 10 \lg10lg10	\lg10
关系运算符

运算符	Markdown
± \pm±	\pm
\times	\times
⋅ \cdot⋅	\cdot
÷ \div÷	\div
\neq	\neq
≡ \equiv≡	\equiv
≤ \leq≤	\leq
≥ \geq≥	\geq
其它特殊字符

符号	Markdown
∀ \forall∀	\forall
∞ \infty∞	\infty
∅ \emptyset∅	\emptyset
∃ \exists∃	\exists
∇ \nabla∇	\nabla
⊥ \bot⊥	\bot
∠ \angle∠	\angle
∵ \because∵	\because
∴ \therefore∴	\therefore
##4. 行间公式与行内公式

行间公式：“
公式
公式
”
行内公式：“$公式$”
相信有了这些符号的编辑，足够常用公式的书写，在写文档的时候也会更加的规范美观。

补充：
花括号
c ( u ) = { 1 N ， u = 0 2 N ， u ≠ 0 c(u)=
⎧⎩⎨⎪⎪1N−−√，u=02N−−√，u≠0
{1N，u=02N，u≠0
c(u)= 
⎩
⎨
⎧


N
1

 

 ，u=0
N
2

 

 ，u 


 =0

 

c(u)=\begin{cases} \sqrt\frac{1}{N}，u=0\\ \sqrt\frac{2}{N}， u\neq0\end{cases}  
1
空格
a b a \quad b
ab

a \quad b
1
矩阵

$$
a = \left[
\matrix{
  \alpha_1 & test1\\
  \alpha_2 & test2\\
  \alpha_3 & test3 
}
\right]
$$
1
2
3
4
5
6
7
8
9

————————————————
版权声明：本文为CSDN博主「姚明明」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/mingzhuo_126/article/details/82722455