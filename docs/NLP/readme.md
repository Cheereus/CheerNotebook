## 形式语言与自动机

本部分内容大部分来自宗成庆老师的《统计自然语言处理》

### 字符串

#### 【定义】 字符串

假定 $\Sigma$ 是字符的有限集合，一般称作字符表，它的每一个元素成为字符串。由 $\Sigma$ 中字符相连而成的有限序列称为 $\Sigma$ 上的字符串。特殊地，不包括任何字符的字符串称为空串，记作 $\varepsilon$。包括空串在内的 $\Sigma$ 上字符串的全体记为 $\Sigma^*$。

#### 【定义】 字符串连接

假定 $\Sigma$ 是字符的有限集合，$x$，$y$ 是 $\Sigma$ 上的符号串，则把 $y$ 的各个符号依次写在 $x$ 符号串之后得到的符号串称为 $x$ 与 $y$ 的连接，记作 $xy$。

如果 $x$ 是符号串，把 $x$ 自身连接 $n(n\geq 0)$ 次得到的字符串 $z=\overbrace{xxx\cdots x}^{n}$ 称为 $x$ 的 $n$ 次方幂，记作 $x^n$。当 $n=0$ 时，$x^0=\varepsilon$。当 $n\geq 1$ 时，$x^n=xx^{n-1}=x^{n-1}x$。

#### 【定义】符号串集合的乘积

设 $A$，$B$ 是字符表 $\Sigma$ 上符号串的集合，则 $A$ 和 $B$ 的乘积定义为

$$AB=\lbrace xy \vert x\in A, y\in B \rbrace$$

其中 $A^0=\lbrace \varepsilon \rbrace$。当 $n\geq 1$ 时，$A^n=AA^{n-1}=A^{n-1}A$。

#### 【定义】闭包运算

字符表 $\Sigma$ 上的符号串集合 $V$ 的闭包定义为：$V^\ast=V^0\cup V^1\cup V^2\cup\cdots$，$V^+=V^1\cup V^2\cup\cdots$，$V^+=V^\ast-\lbrace\varepsilon \rbrace$。

一般地，我们用 $\vert x\vert$ 表示字符串 $x$ 的长度，即字符串 $x$ 中包含字符的个数。

### 形式语言

文法用来精确地描述语言和其结构，自动机则是用来机械地刻画对输入字符串的识别过程。

如果我们用重写规则 $\alpha\to\beta$ 的形式表示，其中 $\alpha$ 和 $\beta$ 均为字符串，那么这条规则表示字符串 $\alpha$ 可以被改写成 $\beta$。
一个初始的字符串通过不断地运用重写规则，就可以得到另一个字符串。如果通过选择多个不同的规则并以不同的顺序来运用这些规则的话，就可以得到不同的新字符串。
于是我们可以得到如下形式语法（或称形式文法）的定义：

#### 【定义】形式语法

形式语法是一个四元组 $G=(N,\Sigma,P,S)$，其中 $N$ 是非终结符号（non-terminal symbol）的有限集合（有时也称变量集或句法种类集）；$\Sigma$ 是
终结符号（terminal symbol）的有限集合，$N\cap\Sigma=\varnothing$；$V=N\cap\Sigma$ 称为总词汇表（vocabulary）；$P$ 是一组重写规则的有限集合：
$P=\lbrace\alpha\to\beta\rbrace$，其中 $\alpha,\beta$ 是由 $V$ 中元素构成的串，但是 $\alpha$ 中至少应含有一个非终结符号；$S\in N$ 称为句子符或初始符。

#### 【定义】推导

设 $G=(N,\Sigma,P,S)$ 是一个文法，在 $(N\cap\Sigma)^\ast$ 上定义关系 $\xRightarrow[G]{}$（直接派生或推导）为
：如果 $\alpha\beta\gamma$ 是 $(N\cap\Sigma)^\ast$ 中的符号串，且 $\beta\to\delta$ 是 $P$ 中的一个产生式，那么 $\alpha\beta\gamma\xRightarrow[G]{}\alpha\delta\gamma$。

一般地，我们用 $\xRightarrow[G]{+}$（读作按非平凡方式派生）表示 $\xRightarrow[G]{}$ 的传递闭包，即 $(N\cap\Sigma)^\ast$ 上的符号串
$\xi_i$ 到 $\xi_{i+1}(i\geq 0)$ 至少经过一步推导或派生。 $\xRightarrow[G]{\ast}$（读作派生）表示 $\xRightarrow[G]{}$ 的自反或传递闭包，
即由 $(N\cap\Sigma)^\ast$ 上的符号串 $\xi_i$ 到 $\xi_{i+1}(i\geq 0)$ 经过 $n(n\geq 0)$ 步推导或派生。

如果已经明确某个推导是由给定文法 $G$ 所产生的，那么符号 $\xRightarrow[G]{\ast}$ 或 $\xRightarrow[G]{+}$ 中的 $G$ 一般可以省略不写。

如果每步推导中只改写最左边的那个非终结符，这种推导称为“最左推导”。反之，如果每次都只改写最右边的非终结符，则为最右推导。最右推导又称规范推导。

#### 【定义】句子

文法 $G=(N,\Sigma,P,S)$ 的句子形式（句型）通过如下递归方式定义：

（1）$S$ 是一个句子形式；

（2）如果 $\gamma\beta\alpha$ 是一个句子形式，且 $\beta\to\delta$ 是 $P$ 中的产生式，那么，$\gamma\delta\alpha$ 也是一个句子形式。

对于文法 $G$，不含非终结符的句子形式称为 $G$ 生成的句子。由文法 $G$ 生成的语言（或称 $G$ 识别的语言）是指 $G$ 生成的所有句子的集合，记作 $L(G)$：

$$L(G)=\lbrace x\vert x\in\Sigma, S\xRightarrow[G]{\ast}x \rbrace$$

### 形式语法的类型

#### 正则文法

如果文法 $G$ 的规则集 $P$ 中所有规则均满足如下形式：$A\to Bx$，或 $A\to x$，其中 $A,B\in N, x\in\Sigma$，则称该文法 $G$ 为正则文法，或称 3 型文法。

在这种书写格式中，由于规则右部的非终结符号（如果有的话）出现在最左边，所以这种形式的正则文法又叫左线性正则文法。类似地，如果一正则文法所有含非终结符号的规则形式为 $A\to xB$，则称该文法为右线性正则文法。

#### 上下文无关文法 CFG

如果文法 $G$ 的规则集 $P$ 中所有规则均满足如下形式：$A\to\alpha$，其中 $A\in N, \alpha\in(N\cup\Sigma)^\ast$，则称文法 $G$ 为上下文无关文法
（context-free grammar, CFG），或称 2 型文法。

从定义中可以看出，2 型文法比 3 型文法少了一层限制，其规则右端的格式没有约束。也就是说，规则左部的非终结符可以被改写成任何形式。

#### 上下文有关文法 CSG

如果文法 $G$ 的规则集 $P$ 中所有规则满足如下形式：$\alpha A \beta\to\alpha\gamma\beta$，其中 $A\in N, \alpha,\beta,\gamma\in(N\cup\Sigma)^\ast$，且 $\gamma$ 至少包含一个字符，
则称文法 $G$ 为上下文有关文法（context-sensitive grammar, CSG），或称 1 型文法。

从上述定义可以看出，字符串 $\alpha A\beta$ 中的 $A$ 被改写成 $\gamma$ 时需要有上文语境 $\alpha$ 和下文语境 $\beta$，这体现了上下文相关的含义。
当然，$\alpha$ 和 $\beta$ 可以为空字符 $\varepsilon$，如果 $\alpha$ 和 $\beta$ 同时为空时，1 型文法变成了 2 型文法。也就是说，2 型文法是 1 型文法的特例。
因此，1 型文法可识别的语言集合比 2 型文法可识别的语言集合更大。

#### 无约束文法

如果文法 $G$ 的规则集 P 中所有规则满足如下形式：$\alpha\to\beta$，其中 $\alpha\in (N\cup\Sigma)^+, \beta\in(N\cup\Sigma)^\ast$，则称 $G$ 为无约束文法或无限制重写系统，也称 0 型文法。

我们约定，如果一个文法的产生式集合中，有分属于不同类型文法的产生式，则把属于包含最广类型文法的那条产生式所属的类型作为这个文法的类型。

同理，如果一个语言能够由几种文法所产生，则把这种语言成为在这几种文法中受限制最多的那种文法所产生的语言。

#### CFG 识别句子的派生树表示

一个上下文无关文法 $G=(N, \Sigma, P, S)$ 产生句子的过程可以由派生树表示。派生树也称语法树（syntactic tree）或分析树（parsing tree）、推导树等。派生树的构造方法如下：

（1）对于任意 $x\in N\cup\Sigma$，给一个标记作为结点，令文法的初始符号 $S$ 作为树的根节点；

（2）如果一个结点的标记为 $A$，且至少有一个除它自身以外的后裔，那么 $A\in N$；

（3）如果一个结点的标记为 $A$，它的 $k(k>0)$ 个直接后裔结点按从左往右的顺序依次标记为 $A_1,A_2,\cdots,A_k$，则 $A\to A_1,A_2,\cdots,A_k$ 一定是 $P$ 中的一个产生式。

#### 【定义】二义性文法

如果文法 $G$ 对于同一个句子存在两棵或两棵以上不同的分析树，那么该句子是二义性的，文法 $G$ 则为二义性文法。

### 自动机理论

自动机是科学定义的演算机器，用来表达某种不需要人力干涉的机械性演算过程，并不具有实际的物质形态。根据不同的结构和功能，自动机分成以下四种类型：
有限自动机（finite automata, FA）、下推自动机（push-down automata, PDA）、线性界限自动机（linear-bounded automata）和图灵机（Turing machine）。

#### 有限自动机

有限自动机又分为确定性有限自动机（definite automata, DFA）和不确定性有限自动机（non-definite automata, NFA）两种。

##### 【定义】确定性有限自动机

DFA $M$ 是一个五元组：

$$M=(\Sigma,Q,\delta,q_0,F)$$

其中，$\Sigma$ 是输入符号的有穷集合；$Q$ 是状态的有限集合；$q_0\in Q$ 是初始状态； $F$ 是终止状态集合，$F\subseteq Q$；$\delta$ 是 $Q$ 与 $\Sigma$ 的直积 $Q\times\Sigma$ 到 $Q$（下一个状态）的映射，
它支配着有限状态控制的行为，有时也称为状态转移函数。

其含义是：处在状态 $q\in Q$ 中的有限控制器从左到右依次从输入带上读入字符。开始时有限控制器处在状态 $q_0$，输入头指向 $\Sigma^\ast$ 中一个链的最左符号。
映射 $\delta(q,a)=q^\prime(q, q^\prime\in Q, a\in\Sigma)$ 表示在状态 $q$ 时，若输入符号为 $a$，则自动机 $M$ 进入状态 $q^\prime$ 并且将输入头向右移动一个字符。

##### 【定义】DFA 接受的语言

如果一个句子 $x$ 对于有限自动机 $M$ 有 $\delta(q_0,x)=p,p\in F$，那么称句子 $x$ 被 $M$ 接受。被 $M$ 接受的句子的全集称为由 $M$ 定义的语言，或称 $M$ 所接受的语言，记作 $T(M)$：

$$T(M)=\lbrace x\vert\delta(q_0,x)\in F \rbrace$$

##### 【定义】不确定的有限自动机

NFA $M$ 是一个五元组：

$$M=(\Sigma,Q,\delta,q_0,F)$$

其中，$\Sigma$ 是输入符号的有穷集合；$Q$ 是状态的有限集合；$q_0\in Q$ 是初始状态； $F$ 是终止状态集合，$F\subseteq Q$；$\delta$ 是 $Q$ 与 $\Sigma$ 的直积 $Q\times\Sigma$ 到 $Q$ 的幂集 $2^Q$ 的映射。

NFA 与 DFA 的重要区别是：在 NFA 中 $\delta(q,a)$ 是一个状态集合，而在 DFA 中 $\delta(q,a)$ 是一个状态。根据定义，对于 NFA $M$ 有映射：

$\delta(q,a)=\lbrace q_1,q_2,\cdots,q_k \rbrace,k\geq 1$

其含义是：NFA $M$ 在状态 $q$ 时，接受输入符号 $a$ 时，$M$ 可以选择状态集 $q_1,q_2,\cdots,q_k$ 中的任何一个状态作为下一个状态，并将输入头向右边移动一个字符的位置。

##### 【定义】NFA 接受的语言

如果存在一个状态 $p$，有 $p\in\delta(q_0,x)$ 且 $p\in F$，则称句子 $x$ 被 NFA $M$ 接受。被 NFA $M$ 接受的所有句子的全集称为 NFA $M$ 定义的语言，记作 $T(M)$：

$$T(M)=\lbrace x\vert p\in\delta(q_0,x) \text{ 且 } p\in F \rbrace$$

##### 【定理】 设 $L$ 是被 NFA 所接受的语言，则存在一个 DFA，它能够接受 $L$。

即 给定一个 NFA 可以构造一个等价的 DFA

由于 DFA 与 NFA 接受同样的语言，所以一般情况下无需区分它们，二者统称为有限自动机。

#### 正则文法与有限自动机的关系

##### 【定理】若 $G=(V_N,V_T,P,S)$ 是一个正则文法，则存在一个 FA $M=(\Sigma,Q,\delta,q_0,F)$，使得 $T(M)=L(G)$。

根据这个定理，可以用以下方法由给定的正则文法 $G=(V_N,V_T,P,S)$ 构造 FA $M$。具体步骤如下：

（1）令 $\Sigma=V_T, Q=V_N\cup\lbrace T\rbrace,q_0=S$，其中 $T$ 是一个新增加的非终结符；

（2）如果在 $P$ 中有产生式 $S\to\varepsilon$，则 $F=\lbrace S,T \rbrace$，否则 $F=\lbrace T \rbrace$；

（3）如果在 $P$ 中有产生式 $B\to a,B\in V_N,a\in V_T$，则 $T\in\delta(B,a)$；

（4）如果在 $P$ 中有产生式 $B\to aC, B,C\in V_N,a\in V_T$，则 $C\in\delta(B,a)$；

（5）对于每一个 $a\in V_T$，有$\delta(T,a)=\varnothing$。

##### 【定理】若 $M=(\Sigma,Q,\delta,q_0,F)$ 是一个有限自动机，则存在一个正则文法 $G=(V_N,V_T,P,S)$，使得 $L(G)=T(M)$。

由 FA $M$ 构造 $G$ 的一般步骤为：

（1）令 $V_N=Q,V_T=\Sigma,S=q_0$；

（2）如果 $C\in\delta(B,a),B,C\in Q,a\in\Sigma$，则在 $P$ 中有产生式 $B\to aC$；

（3）如果 $C\in\delta(B,a),C\in F$，则在 $P$ 中有产生式 $B\to a$。

根据上面介绍的三个定理可以得到一个重要结论：对于任意一个正则文法所产生的语言，总可以构造一个确定的有限自动机识别它。

#### 上下文无关文法与下推自动机

下推自动机（PDA）可以看成是一个带有附加下推存储器的有限自动机，下推存储器是一个堆栈（stack）。

##### 【定义】不确定的下推自动机

PDA 可以表达成一个七元组：

$$M=(\Sigma,Q,\Gamma,\delta,q_0,Z_0,F)$$

其中，$\Sigma$ 是输入符号的有穷集合；$Q$ 是状态的有限集合；$\Gamma$ 为下推存储器符号的有穷集合；$q_0\in Q$ 是初始状态；$Z_0\in\Gamma$ 为最初
出现在下推存储器顶端的开始符号；$F\subseteq Q$ 是终止状态集合；$\delta$ 是从 $Q\times(\Sigma\cup\lbrace\varepsilon\rbrace)\times\Gamma$ 到
$Q\times\Gamma^\ast$ 的子集和映射。映射关系 $\delta$：

$$\delta(q,a,Z)=\lbrace (q_1,\gamma_1),(q_2,\gamma_2),\cdots,(q_m,\gamma_m) \rbrace$$

其中 $q_1,q_2,\cdots,q_m \in Q,a\in\Sigma,Z\in\Gamma,\gamma_1,\gamma_2,\cdots,\gamma_m\in\Gamma^\ast$。

其含义是：当下推自动机处于状态 $q$，接受输入符号 $a$ 时，自动机将进入到 $q_i(i=1,2,\cdots,m)$ 状态，并以 $\gamma_i$ 来代替下推存储器（栈）顶端符号 $Z$，
同时将输入头指向下一个字符。当 $Z$ 被 $\gamma_i$ 取代时，$\gamma_i$ 的符号按照从左到右的顺序依次从下向上推入到存储器。

特殊情况下，$\delta(q,\varepsilon,Z)=\lbrace (q_1,\gamma_1),(q_2,\gamma_2),\cdots,(q_m,\gamma_m) \rbrace$ 时，意味着下推自动机
处于状态 $q$ 时没有接受任何输入信号，因此输入头位置不移动，只用于处理下推存储器内部的操作，自动机进入到 $q_i(i=1,2,\cdots,m)$ 状态，并以 $\gamma_i$ 来代替下推存储器（栈）顶端符号 $Z$。
这个操作叫作“ $\varepsilon$ 移动”。

对于下推自动机，判断一种语言（或者一个句子）是否被 PDA 接受的标准有两种：

（1）终止状态接受标准

对于 PDA $M$，句子 $x$ 被以终止状态标准 $T(M)$ 所接受的定义为：

$$T(M)=\lbrace x\vert x:(q_0,Z_0) \big| \hspace{-0.9mm} \frac{*}{M}(q,\gamma),\gamma\in\Gamma^\ast,q\in F\rbrace$$

其含义是：对于输入句子 $x$，如果 PDA 从初始状态 q_0 开始转换到终止状态 $q$ 时，$x$ 正好被读完，则认为 $x 被 PDA $M$ 所接受，而不管这时下推存储器里的内容如何。

（2）空存储器接受标准

对于 PDA $M$，句子 $x$ 被空存储器标准 $N(M)$ 所接受的定义为：

$$N(M)=\lbrace x\vert x:(q_0,Z_0) \big| \hspace{-0.9mm} \frac{*}{M}(q,\varepsilon),q\in Q\rbrace$$

其含义是：对于输入句子 $x$，当输入头指向 $x$ 的末端时，如果下推存储器变为空，则认为 $x$ 被 PDA $M$ 所接受，而不管此时 PDA 的状态 $q$ 是否在终止状态集 $F$ 中。

##### 【定理】下推自动机与上下文无关文法的关系

设 $L(G)$ 为上下文无关文法语言，则存在一个 PDA $M=(\Sigma,Q,\Gamma,\delta,q_0,Z_0,F)$ 使得该 PDA 以空存储器标准所接受的语言 $N(M)=L(G)$。

设 $N(M)$ 为由 PDA $M=(\Sigma,Q,\Gamma,\delta,q_0,Z_0,F)$ 以空存储器标准所接受的语言，则存在一个 CFG 使得 $L(G)=N(M)$。

#### 图灵机

图灵机与有限自动机的区别在于图灵机可以通过其读写头改变输入带上的字符，而有限自动机不能做到这一点。

##### 【定义】图灵机

一个图灵机 $T$ 可以表达成一个六元组：

$$T=(\Sigma,Q,\Gamma,\delta,q_0,F)$$

其中，$\Sigma$ 是输入/输出带上字符的有穷集合，不包含空白符号 $B$；$Q$ 是状态的有限集合；$\Gamma$ 是输入符号的有穷集合，包含空符号 $B,\Sigma\subseteq\Gamma,\Gamma=\Sigma\cup\lbrace B\rbrace$；$q_0\in Q$ 是初始状态； $F$ 是终止状态集合，
$F\subseteq Q$；$\delta$ 是从 $Q\times\Gamma$ 到 $Q\times(\Gamma - \lbrace B\rbrace)\times\lbrace R,L,S\rbrace$ 子集的一个映射。其中，
$R,L,S$ 分别表示右移一格、左移一格和停止不动。

图灵机的一个格局（instantaneous description, ID）可以用三元组 $(q,\alpha,i)$ 表示，其中 $q\in Q$，$\alpha$ 是输入/输出带上非空白部分，$\alpha\in(\Gamma-\lbrace B\rbrace)^\ast$，$i$ 是整数，表示 $T$ 的读/写头到 $\alpha$ 左端（起始位置）的距离。
图灵机 $T$ 通过如下转移动作引起格局的变化：假设 $(q,A_1,A_2,\cdots,A_n,i)$ 是当前 $T$ 的一个格局 $(1\leq i\leq n+1)$。

（1）如果 $\delta(q,A_i)=(p,X,R),1\leq i\leq n$，那么 $T$ 的基本操作（即指定 $T$ 的基本移动）可以表示为：

$$(q,A_1 A_2 \cdots A_n,i)\big| \hspace{-0.9mm} \frac{}{T}(p,A_1 A_2\cdots A_{i-1}XA_{i+1}\cdots A_n,i+1)$$

即 $T$ 的读/写头在 $i$ 位置写入符号 $X$，并将读/写头向右移动一个位置。

（2）如果 $\delta(q,A_i)=(p,X,L),2\leq i\leq n$，那么：

$$(q,A_1 A_2 \cdots A_n,i)\big| \hspace{-0.9mm} \frac{}{T}(p,A_1 A_2\cdots A_{i-1}XA_{i+1}\cdots A_n,i-1)$$

即 $T$ 的读/写头在 $i$ 位置写入符号 $X$，并将读/写头向左移动一个位置，但不超出输入带的左端位置。

（3）如果 $i=n+1$，读写头超出原字符串的右端，读到的是空白符号 $B$，此时如果有 $\delta(q,B)=(p,X,R)$，那么：

$$(q,A_1,A_2,\cdots,A_n,n+1)\big| \hspace{-0.9mm} \frac{}{T}(p,A_1 A_2\cdots A_nX,n+2)$$

而如果 $\delta(q,B)=(p,X,L)$，则：

$$(q,A_1 A_2 \cdots A_n,n+1)\big| \hspace{-0.9mm} \frac{}{T}(p,A_1 A_2\cdots A_nX,n)$$

如果 $T$ 的两个格局 $X$ 和 $Y$ 之间的基本移动（包括不移动）的次数是有限的，且互相关联，则可记为：$X\big| \hspace{-0.9mm} \frac{*}{T}Y$

图灵机所接受的语言定义为：

$$L(T)=\lbrace \alpha\vert\alpha\in\Sigma^\ast,(q_0,\alpha,1)\big| \hspace{-0.9mm} \frac{\ast}{T}(q,\beta,i),q\in F,\beta\in\Gamma^\ast\rbrace$$

给定一个识别语言 $L$ 的图灵机，不失一般性，我们可以假定每当输入句子被接受时，$T$ 就停机，即不再有下一个动作。另一方面，对于未接受的句子，$T$ 可能不停机。

##### 【定理】图灵机与 0 型文法的关系

如果 $L$ 是一个由 0 型文法产生的语言，则 $L$ 可被一个图灵机所接受。

如果 $L$ 可被一个图灵机所接受，则 $L$ 是一个由 0 型文法产生的语言。

#### 线性界限自动机

线性界限自动机是一个确定的单带图灵机，其读/写头不能超越原输入带上字符串的初始和终止位置，即线性界限自动机的存储空间被输入符号串的长度所限制。

##### 【定义】线性界限自动机

一个线性界限自动机 $M$ 可以表达成一个六元组：

$$T=(\Sigma,Q,\Gamma,\delta,q_0,F)$$

其中，$\Gamma$ 是输入/输出带上符号的有穷集合；$Q$ 是状态的有限集合；$\Sigma$ 是输入/输出带上字符的有穷集合，$\Sigma\subseteq\Gamma$；$q_0\in Q$ 是初始状态； $F$ 是终止状态集合，
$F\subseteq Q$；$\delta$ 是从 $Q\times\Gamma$ 到 $Q\times\Gamma\times\lbrace R,L\rbrace$ 子集的映射。

$\Sigma$ 包括两个特殊符号 $\sharp$ 和 $\\$ $，分别表示输入链的左端和右端结束标志。

线性界限自动机 $M$ 的格局，以及两个格局之间转移关系的定义与图灵机的相同。线性界限自动机与图灵机的唯一不同是对读/写头位置的限制。在线性界限自动机中，读/写头超出输入字符串长度范围时，转移动作没有定义。

线性界限自动机 $M$ 接受的语言定义为：

$$L(M)=\lbrace \alpha\in(\Sigma-\lbrace\sharp,\\$ \rbrace)^\ast,(q_0,\sharp\alpha \\$ ,1)\big| \hspace{-0.9mm} \frac{\ast}{T}(q,\beta,i),q\in F,\beta\in\Gamma^\ast\rbrace$$

对于任何状态 $q\in Q$ 和 $A\in\Gamma$，如果映射 $\delta(q,A)$ 包含的成员（下一个状态）不超过一个，则线性界限自动机是确定的。

##### 【定理】线性界限自动机与上下文相关语言的关系

如果 $L$ 是一个上下文相关语言，则 $L$ 由一个不确定的线性界限自动机所接受。反之，如果 $L$ 被一个线性界限自动机所接受，则 $L$ 是一个上下文相关语言。

### 各种自动机的区别对比

各类自动机之间的主要区别是它们能够使用的信息存储空间的差异：有限状态自动机只能用状态来存储信息；下推自动机除了使用状态以外，还可以用下推存储器（堆栈）；线性界限自动机可以利用状态和输入/输出带本身，因为输入/输出带没有“先进后出”的限制，
因此其功能大于堆栈；而图灵机的存储空间没有任何限制。

从识别语言的能力上来看，有限自动机等价于正则文法；下推自动机等价于上下文无关文法；线性界限自动机等价于上下文有关文法；而图灵机等价于无约束文法。

### 自动机在自然语言处理中的应用

#### 单词拼写检查

#### 单词形态分析

#### 词性消歧
