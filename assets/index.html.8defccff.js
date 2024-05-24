import{_ as o,r as c,o as i,c as l,a as p,b as n,e as t,w as e,d as s}from"./app.01fa4da3.js";var u="/assets/hudi_table1_result.c327079f.png",k="/assets/hudi_table2_result.94cb96cb.png",r="/assets/hive_select_hudi_table2_result.0e146233.png";const d={},v=s(`<h2 id="flink-sql-client-\u64CD\u4F5C-hudi-\u521D\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#flink-sql-client-\u64CD\u4F5C-hudi-\u521D\u4F53\u9A8C" aria-hidden="true">#</a> Flink SQL Client \u64CD\u4F5C Hudi \u521D\u4F53\u9A8C</h2><h3 id="\u73AF\u5883\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u7248\u672C" aria-hidden="true">#</a> \u73AF\u5883\u7248\u672C</h3><p><a href="https://flink.apache.org/downloads.html" target="_blank" rel="noopener noreferrer">Flink 1.15.2</a></p><p>Hudi 0.12.1 (\u81EA\u5DF1\u6253\u5305\u7684)</p><p><a href="https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/hive/overview/" target="_blank" rel="noopener noreferrer">flink-sql-connector-hive-2.2.0</a></p><h3 id="hudi\u5305" tabindex="-1"><a class="header-anchor" href="#hudi\u5305" aria-hidden="true">#</a> Hudi\u5305</h3><p>\u53EF\u4F9B\u4E0B\u8F7D\u7684\u5730\u5740\uFF1Ahttps://repo1.maven.org/maven2/org/apache/hudi/hudi-flink1.15-bundle/0.12.1/hudi-flink1.15-bundle-0.12.1.jar</p><blockquote><p>\u4F7F\u7528\u4E0A\u8FF0\u5305\uFF0C\u5B58\u5728\u7684\u95EE\u9898\u672A\u77E5\uFF0C\u7531\u4E8E\u8003\u8651\u5230\u9700\u8981\u96C6\u6210 Hive \u4E00\u8D77\u4F7F\u7528\uFF0C\u6240\u4EE5\u81EA\u5DF1\u7F16\u8BD1 Hudi \u6E90\u7801\u6253\u7684\u5305\u3002</p></blockquote><p>\u5982\u679C\u60F3\u540C\u6B65 Hive\uFF0C\u9700\u8981\u4F7F\u7528 hive profile \u81EA\u5DF1\u6253\u5305,\u8FD9\u91CC\u53C2\u8003\u5B98\u7F51\uFF1Ahttps://hudi.apache.org/cn/docs/syncing_metastore/#flink-setup</p><p>\u4F7F\u7528\u7684\u6253\u5305\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-Dflink1.15</span> -Dscala-2.12 -Pflink-bundle-shade-hive2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u9700\u8981\u5C06\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 hive \u7248\u672C\u4FEE\u6539\u4E3A\u96C6\u7FA4\u7684 hive \u7248\u672C\u3002\u4FEE\u6539\u5730\u65B9\u4F4D\u4E8E\uFF1Ahudi\u9879\u76EE\u4E0B\u7684 <code>packaging/hudi-flink-bundle/pom.xml</code>\uFF0C\u6587\u4EF6\u5E95\u90E8\u7684 profile \u4E2D\u7684 <code>hive.version</code> \u4E5F\u9700\u8981\u66F4\u6539</p></blockquote><h3 id="\u76F4\u63A5\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u5EFA\u8868" aria-hidden="true">#</a> \u76F4\u63A5\u5EFA\u8868</h3>`,13),m=s(`<div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">## \u5EFA\u8868\u8BED\u53E5</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> hudi_table1 <span class="token punctuation">(</span>
  uuid <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> ENFORCED<span class="token punctuation">,</span>
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age <span class="token keyword">INT</span><span class="token punctuation">,</span>
  ts <span class="token keyword">TIMESTAMP</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>partition<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>partition<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;connector&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hudi&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;path&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hdfs:///user/root/hudi/warehouse/hudi_table1&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;table.type&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;MERGE_ON_READ&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># \u63D2\u5165\u6570\u636E</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> hudi_table1 <span class="token keyword">VALUES</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Danny&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:01&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Stephen&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:02&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Julian&#39;</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:03&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Fabian&#39;</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:04&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Sophia&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:05&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Emma&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:06&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:07&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Han&#39;</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:08&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment"># \u67E5\u8BE2\u6570\u636E</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> hudi_table1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt=""></p><h3 id="\u901A\u8FC7-hive-catalog-\u7BA1\u7406-hudi-\u8868" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7-hive-catalog-\u7BA1\u7406-hudi-\u8868" aria-hidden="true">#</a> \u901A\u8FC7 Hive Catalog \u7BA1\u7406 Hudi \u8868</h3>',3),b=s(`<div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">## \u521B\u5EFA hive_catalog</span>
<span class="token keyword">CREATE</span> CATALOG hive_catalog 
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;type&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hive&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;default-database&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;hive-conf-dir&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;/etc/hive/conf&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">USE</span> CATALOG hive_catalog<span class="token punctuation">;</span>

<span class="token comment">## hive_catalog \u4E0B\u521B\u5EFA hudi \u5E93</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> hudi<span class="token punctuation">;</span>

<span class="token keyword">use</span> hudi<span class="token punctuation">;</span>

<span class="token comment">## \u5EFA\u8868\u8BED\u53E5</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> hudi_table2 <span class="token punctuation">(</span>
  uuid <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token operator">NOT</span> ENFORCED<span class="token punctuation">,</span>
  name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  age <span class="token keyword">INT</span><span class="token punctuation">,</span>
  ts <span class="token keyword">TIMESTAMP</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>partition<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
PARTITIONED <span class="token keyword">BY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>partition<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;connector&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hudi&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;path&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;hdfs:///user/root/hudi/warehouse/hudi_table2&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;table.type&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;MERGE_ON_READ&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">## \u63D2\u5165\u6570\u636E</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> hudi_table2 <span class="token keyword">VALUES</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Danny&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:01&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Stephen&#39;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:02&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Julian&#39;</span><span class="token punctuation">,</span><span class="token number">53</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:03&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Fabian&#39;</span><span class="token punctuation">,</span><span class="token number">31</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:04&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Sophia&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:05&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Emma&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:06&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id7&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span><span class="token number">44</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:07&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token string">&#39;id8&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Han&#39;</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token keyword">TIMESTAMP</span> <span class="token string">&#39;1970-01-01 00:00:08&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;par4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token comment">## \u67E5\u8BE2</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> hudi_table2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt=""></p><h5 id="\u5728-hive-\u4E2D\u67E5\u770B\u8BE5\u8868-\u5E76\u5C1D\u8BD5\u67E5\u8BE2\u3002" tabindex="-1"><a class="header-anchor" href="#\u5728-hive-\u4E2D\u67E5\u770B\u8BE5\u8868-\u5E76\u5C1D\u8BD5\u67E5\u8BE2\u3002" aria-hidden="true">#</a> \u5728 hive \u4E2D\u67E5\u770B\u8BE5\u8868\uFF0C\u5E76\u5C1D\u8BD5\u67E5\u8BE2\u3002</h5><p><img src="'+r+'" alt=""></p><h3 id="\u5F02\u5E38\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u89E3\u51B3" aria-hidden="true">#</a> \u5F02\u5E38\u89E3\u51B3</h3><h4 id="_1-sql-client-\u63D0\u4EA4-insert-\u8BED\u53E5\u6210\u529F-\u67E5\u8BE2\u65E0\u6570\u636E\u3002" tabindex="-1"><a class="header-anchor" href="#_1-sql-client-\u63D0\u4EA4-insert-\u8BED\u53E5\u6210\u529F-\u67E5\u8BE2\u65E0\u6570\u636E\u3002" aria-hidden="true">#</a> 1. sql-client \u63D0\u4EA4 INSERT \u8BED\u53E5\u6210\u529F\uFF0C\u67E5\u8BE2\u65E0\u6570\u636E\u3002</h4><p>\u901A\u8FC7 Web UI \u53D1\u73B0\uFF0C\u4EFB\u52A1\u5931\u8D25\u4E86\uFF0Ctaskmanager \u65E5\u5FD7\u663E\u793A\u62A5\u9519\u4FE1\u606F <code>java.lang.ClassNotFoundException: org.apache.hadoop.fs.Path</code></p><p><strong>\u89E3\u51B3\u65B9\u6848\uFF1A</strong></p><p>\u4E3A flink \u6DFB\u52A0 <code>flink-shaded-hadoop-2-uber-3.0.0-cdh6.3.2-9.0.jar</code> \u4F9D\u8D56\uFF0C\u5373\u53EF\u89E3\u51B3\u3002</p>',9);function h(g,T){const a=c("font");return i(),l("div",null,[v,p("p",null,[n("\u76F4\u63A5\u521B\u5EFA\u7684\u8868\uFF0C\u5B58\u5728\u4E8E"),t(a,{color:"red"},{default:e(()=>[n("\u5185\u5B58")]),_:1}),n("\uFF0C\u5173\u95EDsql-client\u540E\uFF0C\u91CD\u65B0\u6253\u5F00\uFF0C\u9700\u8981\u91CD\u65B0\u521B\u5EFA\u8868")]),m,p("p",null,[n("\u901A\u8FC7 Hive Catalog \u7BA1\u7406\u7684 Hudi \u8868\uFF0C\u5728\u4E0B\u4E00\u6B21\u6253\u5F00 sql-client\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 Hive Catalog \u4F7F\u7528 hudi \u8868\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728 hive \u4E2D\u770B\u5230\u8BE5\u8868\uFF08\u5F53\u7136\uFF0C\u65E2\u7136 Hive \u4E2D\u80FD\u770B\u5230\uFF0CImpala \u5237\u65B0 Hive \u7684\u5143\u6570\u636E\u4E4B\u540E\uFF0C\u4E5F\u80FD\u770B\u5230\uFF09\uFF0C"),t(a,{color:"red"},{default:e(()=>[n("\u4F46\u662F hive \u4ECD\u7136\u65E0\u6CD5\u67E5\u8BE2\u8BE5\u8868")]),_:1}),n("\u3002")]),b])}var y=o(d,[["render",h],["__file","index.html.vue"]]);export{y as default};
