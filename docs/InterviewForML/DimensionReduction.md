## 降维

### PCA 最大方差理论

### PCA 最小平方误差理论

### LDA 线性判别分析

### PCA 与 LDA 的比较

- PCA 选择的是投影后数据方差最大的方向。由于它是无监督的，因此 PCA 假设方差越大，信息量越多，用主成分来表示原始数据可以去除冗余的维度，达到降维

- 而 LDA 选择的是投影后类内方差小、类间方差大的方向。其用到了类别标签信息，为了找到数据中具有判别性的维度，使得原始数据在这些方向上投影后，不同类别尽可能区分开

