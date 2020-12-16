/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","6d7565bc28eb721882e4daef4b1cb232"],["/archives/2019/index.html","1eb400d7b4ad2eee200003a9d1e4ecbd"],["/archives/2020/01/index.html","565f75853faf520c9195d78f7daea94a"],["/archives/2020/01/page/2/index.html","5ffec4339ed4ba222ef47d9b24748bc8"],["/archives/2020/01/page/3/index.html","ac9b98aef98e31983313a832813ce454"],["/archives/2020/01/page/4/index.html","f9b8193f0d14c38dd960960e2fef8c3a"],["/archives/2020/01/page/5/index.html","bea3093b433a03ef5e5dedfd25cf6fcd"],["/archives/2020/01/page/6/index.html","62c82d3a7a0127fa7f3d08a7df3fafda"],["/archives/2020/02/index.html","e7a4d507fc7c43feae8f878cc769e0a2"],["/archives/2020/02/page/2/index.html","f36b8bf015c718a0fe040880de14bf50"],["/archives/2020/02/page/3/index.html","f340fed50f46fe1dfb62f4e85e24a4bd"],["/archives/2020/03/index.html","d3dd9f847c9e8ebd015694c4c8e2213f"],["/archives/2020/03/page/2/index.html","438e58448b31be85acb0d82b703fa48f"],["/archives/2020/04/index.html","e015f384aa9c3cd93a7e4e73ed014c06"],["/archives/2020/04/page/2/index.html","c594fcccc6d13c10f99791f2fdffdcb7"],["/archives/2020/05/index.html","e8f5965253731dca2ccb5d7e8b96426c"],["/archives/2020/05/page/2/index.html","74d30911b8240860c88ce29eb9f60cbf"],["/archives/2020/06/index.html","f26d518d8a12338d3e05b1b6c6f11c8b"],["/archives/2020/07/index.html","de68dc91196123591603b6ab6ab43d1f"],["/archives/2020/07/page/2/index.html","bf1d20cf48adc282f6a59c3268b70ad8"],["/archives/2020/08/index.html","e12f484e4558970d52e796eebf2aea44"],["/archives/2020/10/index.html","8e32edd98ad06e115871a230a2017db3"],["/archives/2020/11/index.html","6081db124dd8d5e31623d03bb4859227"],["/archives/2020/12/index.html","8106f466ed684d3d00f53de8f049b39f"],["/archives/2020/index.html","1d5849236c6ad39aa64aaf178af96385"],["/archives/2020/page/10/index.html","6372d31287c432a863d7410051e2967a"],["/archives/2020/page/11/index.html","0d273b1302177f4f4195d0421983a0cd"],["/archives/2020/page/12/index.html","1a40562bbfe7b932446150a6adffb7e4"],["/archives/2020/page/13/index.html","a92bfacce709a3c41c520bc4ae6703e8"],["/archives/2020/page/14/index.html","9bd6cda450ba22a8c5610cc1211ed361"],["/archives/2020/page/15/index.html","fed73c09569a83d334d4dc844decf4f5"],["/archives/2020/page/16/index.html","38af7caf14424289a18c9bd834d0ebe4"],["/archives/2020/page/2/index.html","6ba44fa8bd222ea5665cb6528c4086c8"],["/archives/2020/page/3/index.html","b4db1836ff9cc708bf5ec9b3a9bcb5dd"],["/archives/2020/page/4/index.html","45f24025b075110582a7ee42f10181cc"],["/archives/2020/page/5/index.html","7e6ce5a629d5f0103646a108b279976e"],["/archives/2020/page/6/index.html","2933f505929b184350a2f2e52ff8f21c"],["/archives/2020/page/7/index.html","4fd41c2018bbe105407db5d90047b77d"],["/archives/2020/page/8/index.html","4ab9ea8c6c9e03366d26952ed550c5da"],["/archives/2020/page/9/index.html","35bac9d89e1b402d52657979fca11555"],["/archives/index.html","3c00afbc6a1d03ea7e9f4d3f6104932f"],["/archives/page/10/index.html","f5cac309377fd113766524d1ce8b55ac"],["/archives/page/11/index.html","870183cafa2e915d064614727a24d4a5"],["/archives/page/12/index.html","f7ffb5a5878a2b77c826b0978e57d696"],["/archives/page/13/index.html","672da5882b090b6bd8373d26c0b6a54c"],["/archives/page/14/index.html","67dc9e713f1cfd664112de1983bd2206"],["/archives/page/15/index.html","de4da42a65d4a219b62b7181362cb6e0"],["/archives/page/16/index.html","2e70e6a842f2c408384fe5ab68a1bc5a"],["/archives/page/2/index.html","57b05c45feab86120a345960e1eb295d"],["/archives/page/3/index.html","77dce8d63b1bf14ddbab1f371922e10c"],["/archives/page/4/index.html","b3aae571d6c04a6a770d4438656d32a3"],["/archives/page/5/index.html","3850bef17d08217068bfc4439df13ce7"],["/archives/page/6/index.html","47c03a7cbea532ac4b268503b4a305e6"],["/archives/page/7/index.html","47a319248df3d84bfeb652a08924ac56"],["/archives/page/8/index.html","511c3d88eab4084b17d62ad675566b48"],["/archives/page/9/index.html","dcf831ba19f96605eb30341885e8c6f2"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","ff86efb4c598d5539917f9d0497a97de"],["/categories/Linux/page/2/index.html","b7bf55bcded5ab1125575afba516fe5f"],["/categories/Python/index.html","a8d2c5bc1222f4c3bb0afb890f22ceec"],["/categories/c/index.html","5204d23008d99be0f2544709477ffac1"],["/categories/index.html","bdbc5170a67b75d334cdd8c9f28a78b8"],["/categories/java/index.html","b44057d1ac11303fdecefad8716a1eba"],["/categories/java/page/2/index.html","1fa41ec0556b158b6f17d740378aeddd"],["/categories/java/page/3/index.html","fafd175da81e9a34527ce83925278bb4"],["/categories/next/index.html","46bb98b03bfda6bc3e141fa01ffb353b"],["/categories/stl/index.html","82cc8fbb394df02bcbf152b7a35cf927"],["/categories/windows/index.html","d44c7249a9df42a87618e928414047bb"],["/categories/基础/c/index.html","660181ddc31ac76ef402386daf22a0e1"],["/categories/基础/index.html","e8b49634fb272a68647943c449ad091d"],["/categories/基础/page/2/index.html","400131bbf81efcba3300db32a2f605bf"],["/categories/数学/index.html","29cd7dcb889f147416c27f9424abc6c9"],["/categories/数学/概率论/index.html","fc027a5eeef41fe825fd864cfbeb1632"],["/categories/数据结构/index.html","4737a2c06d59bf2560de72082a0680c6"],["/categories/数据结构/算法/index.html","f6c942fac9389199ff8e1b0a56020777"],["/categories/机器学习/index.html","0c338e6f44b627c4770c45a8e249e17f"],["/categories/杂项/index.html","45cbb9f8a9a314316ca7a3a3f3bb02ab"],["/categories/汇编/AT-T/index.html","f7f60aa31c3b754aa3d2b84f1a9cfb96"],["/categories/汇编/index.html","479c9600dc1ed1e841818e844676e4f2"],["/categories/汇编/page/2/index.html","ce701531dff4df5e64084da444207115"],["/categories/汇编/page/3/index.html","7f1873e25113f90366544df6a3c4b6b6"],["/categories/算法/index.html","9c7e611e82f4c27ca7fde5d954e09723"],["/categories/算法/page/2/index.html","585be7c68b22c86b6b3b76d16211f5db"],["/categories/算法/page/3/index.html","6bec91c89b9647b3fb9f7181f55c1ff4"],["/categories/计算机系统基础/index.html","b266a5f31e0397918e64f520ae3c4076"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","822f3c86b2f131cc7255280412c46886"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","e0e1b570c3e945f0808983f1f78b1ae5"],["/page/11/index.html","b913619dc214a86fb497afeb7b66d462"],["/page/12/index.html","6d1251e5ec79b545818f92d6f75e57f9"],["/page/13/index.html","b28122d8a05d434e9289d43410ab2140"],["/page/14/index.html","f7bd7c26bbd722be105eba4adc127c4e"],["/page/15/index.html","d67ea5aa4b8864189fa4e9a23523bb49"],["/page/16/index.html","f5b95697bb008ea9b954371fd5d207e6"],["/page/2/index.html","fc184870bea93aa3d02582e66cc447d4"],["/page/3/index.html","fc294cc0dc55d19dc4061103e57bad88"],["/page/4/index.html","ae42085bb92c704f4f0b366f6a3386d7"],["/page/5/index.html","56c731708489b40a31862e162426d959"],["/page/6/index.html","baa828118af8ee9830d8626dd89b6c13"],["/page/7/index.html","1e43dd9e4eed2abcc1b450119631315a"],["/page/8/index.html","11c076179d3ee862c310c6f51bb764f0"],["/page/9/index.html","51b4ad0d22f9a6c53a5a33f0dae3da10"],["/post/10919.html","f308641c0135f2e3919a77728ae52d7b"],["/post/11051.html","d68f4ff15196a9dc2a536ea20d7095bd"],["/post/11306.html","2a683229ab1ad1eee113452b087de391"],["/post/11491.html","afb3293367ebf6fb252a56584c0ffdd3"],["/post/11799.html","0efa37e70940a6c99fc3d1224881bb20"],["/post/12334.html","8222ecc9aa172c749203fd7b6fc97d85"],["/post/1326.html","c23a722a6f69eea19878c7a8649bc9f9"],["/post/14379.html","7b743b062962c15e103a59183c3867cc"],["/post/14511.html","a0927947ef3c4fb55bf5d6dda757b827"],["/post/15201.html","be0b14732129f6ec39f0c96b9c36193b"],["/post/15425.html","fa5a811905edca80b7f3751bb6d14f66"],["/post/16107.html","854d9ef8cf8f3c524d464ed56ec74165"],["/post/17862176.html","1258bfc5262842741b4e0f94a5b997d6"],["/post/18431.html","e017d3fd87fa33b94c78b8b53da91ec9"],["/post/18912.html","6c175f6c8c735d1b56b3425d8d9ef1c6"],["/post/1b9c8662.html","91a710a0f449a5d2deb8dae4fc8c2b3d"],["/post/20198.html","eaadd560c9b3dd807c52afd892dfe767"],["/post/20ff5ccb.html","2d1beb0b7eec8595832266eda73ad5c5"],["/post/21624.html","9a49a59cc6ce11ddb12dccc129e52231"],["/post/2170659a.html","047743d08dc48a8f43c25eaeecc496ab"],["/post/22102.html","deb195d41e2a5cb0fc4778188929bd28"],["/post/22493.html","b1d6144d0a7facae4815f92aeed51741"],["/post/235252ea.html","fe815a6772d4c2936fa1c85dc6559bee"],["/post/25699.html","750576d45b05836d7bb5e67560f998cc"],["/post/2647.html","53a50256a5303fe6d2affc8320d745e6"],["/post/26477.html","8be6fb7b5d4323e86ab056cb9a99d92e"],["/post/26671.html","c79309178a0a29b815514140ed26ca5a"],["/post/26737.html","f5b4b4a1f634b349df38cf62a6d8fed5"],["/post/27045.html","ea020cdfb18ec5b844b902ea7393abaf"],["/post/27621.html","46ddfd8e4ff2d0c1760d9b8c37900912"],["/post/27890.html","e6719461a65dfaa35f2736eccae1c1af"],["/post/27980.html","d0364bc7259de67a3f7057246685083f"],["/post/280b588e.html","e8a1b7b6523ca7fab5444e2892421cb8"],["/post/28579.html","4f19d306639a3e427dda05687d90bd7a"],["/post/28877bf.html","b7bbc4583fe2b2fcd5c2e2e78e04bf4a"],["/post/28954.html","07d6f2e42f126147543089b4937846d2"],["/post/29378.html","432fca9bd27441e82cc99ff91c4e84c6"],["/post/29949.html","495ec7a2bab43c4ee3d8ada5f0eadd33"],["/post/2ae43b86.html","8e129227799c880f94527dcc060aecfe"],["/post/2ba82a45.html","b803af7f333d0514a8f39067f84f0df7"],["/post/30072.html","bfa102ce80692fd965cd5f90ff1cbcc8"],["/post/30479.html","52a6bd5af14e67fc5f802310f409c32d"],["/post/31a6b40.html","f59045e97223e8b12e886ff75bf3a01a"],["/post/325cdbf2.html","855e54a60eb881bbfc2e41d45b3681ea"],["/post/3319ed9a.html","e7f7399c7e119f469d8fae49092d4af7"],["/post/3320.html","25b3b62b36dd9ad18e7463b0e176337f"],["/post/33cb1151.html","c10a6933bc241aaf9056a7e361ea14dc"],["/post/34811d5f.html","d8aebd7f3f01f0d157027f988204acae"],["/post/348d4e04.html","7a6e68ba5d22f97af985678ec0dbc7ef"],["/post/3526.html","a5d543ab95be78a593d1c2c8e6f56534"],["/post/35532.html","eff6211d15f3315ee7f492b7a390b684"],["/post/35848.html","78e7fccfee8c8d03a6a164160c86b718"],["/post/37318.html","aee850fa327743fc69db02b2b5b74c37"],["/post/37663.html","813608e4635f7c1b7cf6dbd855a32c1f"],["/post/38035.html","888a3a584f650fc26af35c056f90893f"],["/post/38072.html","4a09f9e44a07b69adb04e4db2e025ea0"],["/post/38145.html","8e1a4ac13485475f23632c959fa419ad"],["/post/39968.html","d5626501b2563d7fc96d63adf4727f5a"],["/post/3de4bc69.html","f98cdc8c9f94b38ff1dc408278ddb800"],["/post/40583.html","da2eba48b274e2acea47bd2b7e27c97b"],["/post/40997091.html","54a4211111d245734a63d2dce084ec36"],["/post/41129.html","ea6b655715e3e44445869c9457573d05"],["/post/41763.html","be2b8f3a3c8c398b2d79085588bb99fe"],["/post/41829.html","f71726cc5b3605ae4c678024b7ada33c"],["/post/41840.html","268d90c982cc69510e41c092cfbce941"],["/post/43817.html","7d9e85ccef34aa4f293e7e94b61c9ed4"],["/post/43878.html","1ce5f978766549f8a8f6f7aa01a4a29d"],["/post/44250.html","68e9d1483c543453603772991f66b785"],["/post/44336.html","bc4880c9c0f75764b2aa7a0779d2df0b"],["/post/44454.html","3aa3bd469400bde0e4791921849d1bdc"],["/post/44487.html","cc87d3dc4a4988e5583d208b7f1acf77"],["/post/44914.html","cc0724f529c8feb9662f8ea09247adae"],["/post/4551c130.html","74e56bade3f4fd63eccb3bb3af7031aa"],["/post/455a4c92.html","5ab2eb70a31b5620cc799ba92f63803e"],["/post/46466.html","8b3e8fb8297a22674b5ec9858cd8ea57"],["/post/46925.html","a5161326ab2489ec36de6d3f2503f674"],["/post/47075.html","4419266b87bd4dcfbf9e050d9b0c7d37"],["/post/48220.html","e50aff1cc22ac39bd9fc734f5cbb4807"],["/post/4b1879e3.html","9bd33124f256a0245abe252af297f6b6"],["/post/4c720881.html","3fefd3ad35918129538315e5c735f128"],["/post/50daec4.html","4025b254670e2aa265cd6bbfa028ac3d"],["/post/51491.html","bd4d25a71618c9c740f0e7d50e531a56"],["/post/51e63dcf.html","1bd66e31dad4aa43d613256ca8c0991e"],["/post/52078.html","025008b0409efa7f9141c29d843dd0bf"],["/post/53677394.html","5e96d8c7d479acdf6c47a7b5a86af7f3"],["/post/54300.html","bc2f2fa9285ad0143adba7e845f8983d"],["/post/54612.html","749539d80ec36c96cd43ad3c8ee7033b"],["/post/54613.html","e033d978a111ebe378706dfd4beb84a6"],["/post/54708.html","d86a2e206da5e445a5d8ea6dd2ea5cc0"],["/post/54778.html","f2323950c24c6bb8730bb7700945ca98"],["/post/5490.html","93ab5ef62e0aebbfd584bb8c886b26f5"],["/post/55046.html","5246ba292033b407b4211c9dc0247050"],["/post/56929.html","0e68eca43850fd617048bd9fc94fedf2"],["/post/57339.html","ff3c9b9b5c7e7941e21d9de97c3e7637"],["/post/57449.html","619aee3d3bc2a2c62ecbd3c943c3d897"],["/post/57453.html","4d4f4c25c4fd52b2e9f51409d511d58b"],["/post/57671.html","9e167264d3e37f067cf494a66f1919ea"],["/post/58313.html","3e1d6e15f078a6174cd68f42ebdccefa"],["/post/58481.html","848352e17bea9850df3920e872471a57"],["/post/58986.html","fa43e1d55e1853a6b9b8b6d6288c257a"],["/post/59431.html","7765f2acba05106802f1bc2cca5ca6ef"],["/post/5951da65.html","77b0b692cce380f50b87ee9d37009371"],["/post/5be7e977.html","37950a32f4dec0adbacd33dbd7938b84"],["/post/5f9e4eff.html","a7232c3f7140d6e5d69a3caa684cbded"],["/post/604b49d0.html","e25f83614f7fa35da82ac58d5f94a718"],["/post/61312.html","4d2ec551b7ab7c1fda2370d0d851f1c3"],["/post/61738.html","72005574e112315965fda59207beb6b5"],["/post/61809.html","f21c8eeed42882bf4af2cffac54ac01c"],["/post/61eaf19a.html","8ee3667e93449dce1b271df9208e52b0"],["/post/63002.html","efb232684c267a50845dbfefe2720fcc"],["/post/63711.html","0a9f2b85152c8c14ccdda66747d04cc5"],["/post/6587.html","40dc0fcb3ac7d1677fed7906fe0f6c26"],["/post/6589.html","f81e8179e6eef102f5b591861cd54c48"],["/post/6880.html","954394f02514bf6d763418572bd66f80"],["/post/70263071.html","d82c8a82caca5d06d51d7dee8ac58df8"],["/post/71038564.html","afa68cbad1d9fccd8b792b020d639719"],["/post/7119.html","3e4ebe8defc5705cf68a2fa8f09ace23"],["/post/74e7fdff.html","62077840e3b0d1e3e3037a0793540beb"],["/post/7502.html","5fd6829baec5b2041699145c4f5ec3ed"],["/post/7564.html","742ccf71193aa20b1a0b451171745fcf"],["/post/766f9b60.html","11b4ed40fab4c8f06764ef94f39b4ad2"],["/post/7ca31f7.html","caaacd43ff3df48d2f720051b6bcd73f"],["/post/7d1c86da.html","7187c74656a45449e771e41cd90e125b"],["/post/7f3bcd7f.html","b008a347037d8c8b69eefce25f51dff0"],["/post/8039.html","e95bb6d464d1052a5d28d302a56840b5"],["/post/8050.html","8127f5b33e461d3e0b6e00fd0b5ea3b6"],["/post/8072.html","a1aac7b8f4930853c8122bac183e0f7b"],["/post/8274.html","975e0f0e96ecb97a9fa674f9aa7de91c"],["/post/8372.html","3a21798ede666f4c05237bca2609cfd8"],["/post/8498.html","19c1d4cf31dd5be755b31bf5615daa38"],["/post/85b4e13b.html","b9f86911a0488d5519e3312aeae7f8dd"],["/post/912b2566.html","8cb88c764ce5ca23cbcffad72c4d91f7"],["/post/9187.html","e8b100df9c5e5967c693128c7e88dd8e"],["/post/9197.html","8168fad9900806c5b29bf63f9b1be07c"],["/post/94ceb2fd.html","f2dfad49e302f0e1cb893a7224222419"],["/post/95495db.html","99cafa52cb5b38ad889c4ddd2917e008"],["/post/97246020.html","7f111e7fbbb82bfbb233126657bacdee"],["/post/a3a786d6.html","ce8f75ee5019bf1b5815387a5f1c22c8"],["/post/a444b428.html","55efa96551759e01b8ee28f1816f5c34"],["/post/a50b8908.html","a1564eb458909550c7d0d4df70db4e38"],["/post/aa1eade8.html","bb505b90a1c2f6e22179b08c3596cecd"],["/post/ade8c6d6.html","fcbd56ef68487aeb4b53393cd710b9e4"],["/post/ae8362df.html","e03ac07dbcc70a7bc47b1adfa8379923"],["/post/b4c1d206.html","8d50c65185804faa0206b9b8457b9b50"],["/post/d431fab4.html","4e31f7d08545d3bc3baa772a4c159147"],["/post/d5381517.html","c5cd10547cadcc4d21b31676d33c400a"],["/post/e058ffd8.html","adfc60f306d6536f7a7729253a5065bd"],["/post/e0f8cb74.html","d2f7714057ede60a234fd5f1c51130ce"],["/post/eefe591f.html","015593ba31e52d7417ec0e182597f9a5"],["/post/ef296a07.html","2097b8d24a4b10e96ea0020322a9eed5"],["/post/f201f9fd.html","0d82d5cb9db4c47aff456caff4175106"],["/post/f79e4123.html","063b1a3ac9996348868cfbff8ee26871"],["/post/f8648a1d.html","09b279a5214bb45d4faf19c9095c78ed"],["/post/f89cb603.html","1af0294add11a44fb973a6860f391f46"],["/post/fa288682.html","20d2db1d7200a67101e5928402278abf"],["/post/fb98053e.html","e1cd7b45116c294260168ea962561b4b"],["/sw-register.js","66b4d9e5e3adcf4bc452206e6d076eac"],["/tags/AT-T/index.html","8f72a84afd4847ad35352760411bfaca"],["/tags/index.html","18c1001b5f412d3f716f421d7a5b0073"],["/tags/动态规划/index.html","e6a7a84bc7ea1651bf820b2212db5a71"],["/tags/字符串/index.html","6f7b9f757e35e64638a5e9ea01954286"],["/tags/字符常量/index.html","be06dc79bbd6e512f4ad2269a1dd8a5b"],["/tags/快排/index.html","70037804e03e046d831501588e00fb9f"],["/tags/排序/index.html","52982f8253fd6991363eb1921c7b0481"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
