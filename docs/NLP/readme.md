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

字符表 $\Sigma$ 上的符号串集合 $V$ 的闭包定义为：$V^\star=V^0\cup V^1\cup V^2\cup\cdots$，$V^+=V^1\cup V^2\cup\cdots$，$V^+=V^\star-\lbrace\varepsilon \rbrace$。

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

设 $G=(N,\Sigma,P,S)$ 是一个文法，在 $(N\cap\Sigma)^\star$ 上定义关系 $\xRightarrow[G]{}$（直接派生或推导）为
：如果 $\alpha\beta\gamma$ 是 $(N\cap\Sigma)^\star$ 中的符号串，且 $\beta\to\delta$ 是 $P$ 中的一个产生式，那么 $\alpha\beta\gamma\xRightarrow[G]{}\alpha\delta\gamma$。

一般地，我们用 $\xRightarrow[G]{+}$（读作按非平凡方式派生）表示 $\xRightarrow[G]{}$ 的传递闭包，即 $(N\cap\Sigma)^\star$ 上的符号串
$\xi_i$ 到 $\xi_{i+1}(i\geq 0)$ 至少经过一步推导或派生。 $\xRightarrow[G]{\star}$（读作派生）表示 $\xRightarrow[G]{}$ 的自反或传递闭包，
即由 $(N\cap\Sigma)^\star$ 上的符号串 $\xi_i$ 到 $\xi_{i+1}(i\geq 0)$ 经过 $n(n\geq 0)$ 步推导或派生。

如果已经明确某个推导是由给定文法 $G$ 所产生的，那么符号 $\xRightarrow[G]{\star}$ 或 $\xRightarrow[G]{+}$ 中的 $G$ 一般可以省略不写。

如果每步推导中只改写最左边的那个非终结符，这种推导称为“最左推导”。反之，如果每次都只改写最右边的非终结符，则为最右推导。最右推导又称规范推导。

#### 【定义】句子

文法 $G=(N,\Sigma,P,S)$ 的句子形式（句型）通过如下递归方式定义：

（1）$S$ 是一个句子形式；

（2）如果 $\gamma\beta\alpha$ 是一个句子形式，且 $\beta\to\delta$ 是 $P$ 中的产生式，那么，$\gamma\delta\alpha$ 也是一个句子形式。

对于文法 $G$，不含非终结符的句子形式称为 $G$ 生成的句子。由文法 $G$ 生成的语言（或称 $G$ 识别的语言）是指 $G$ 生成的所有句子的集合，记作 $L(G)$：

$$L(G)=\lbrace x\vert x\in\Sigma, S\xRightarrow[G]{\star}x \rbrace$$

### 形式语法的类型

