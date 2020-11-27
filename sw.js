/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","faaa89dd8c979aa602df7a7389960343"],["/archives/2019/index.html","f927d7d00b5d302670b0fbf98975de19"],["/archives/2020/01/index.html","8ae4ea0d09df1503d2c46cd0ac2ba004"],["/archives/2020/01/page/2/index.html","6d1a0b618a507072f5a7d1120c2f66d2"],["/archives/2020/01/page/3/index.html","944c91e93d64148fadf30bf55d53c48b"],["/archives/2020/01/page/4/index.html","fbf4dc1dadaa819149cf48495265684e"],["/archives/2020/01/page/5/index.html","f534ab8c5fa1a4ef21b0df0a3142b5a8"],["/archives/2020/01/page/6/index.html","a14e66c09c0756e6a1003b8aeae5f629"],["/archives/2020/02/index.html","eb318c359b6cd0e1683d85c65996f98b"],["/archives/2020/02/page/2/index.html","defc3ceddf1ae6b130934ad933e5d24c"],["/archives/2020/02/page/3/index.html","1db9a9b7da8e3fa63e23631d4c518711"],["/archives/2020/03/index.html","dafc2310a1023d8bc0dac0db481970f5"],["/archives/2020/03/page/2/index.html","bfe4c9f70c687d7cb57e799cbbde986d"],["/archives/2020/04/index.html","88378cd683c3849cc120cf02662281f2"],["/archives/2020/04/page/2/index.html","a879de7ce4095c69f7f8ddcbe92f476c"],["/archives/2020/05/index.html","32783d47eb645dcc830be8eaf928db3b"],["/archives/2020/05/page/2/index.html","bfc60d06319c20511490d4f3309a87a2"],["/archives/2020/06/index.html","f6069cdd7b4ec80fb5d06bd7ba626ab0"],["/archives/2020/07/index.html","ef41bbe1a6b2b1535b67bacf0ec949cc"],["/archives/2020/07/page/2/index.html","79a45b846588d644f9a1ff86c2b3c3e2"],["/archives/2020/08/index.html","f5796521083c19b9ca7d30d25abf7a90"],["/archives/2020/10/index.html","0c73c4464e5e51c356bfca65e4a4b566"],["/archives/2020/11/index.html","8c171ce7f030f47e18bd21d07a54b111"],["/archives/2020/index.html","0d10e34ebfcbd38e090787b4c9cc57e0"],["/archives/2020/page/10/index.html","2ed3307287692007bb600f595bcd2e90"],["/archives/2020/page/11/index.html","d088161cee7cfda6e4e7b0b77789274e"],["/archives/2020/page/12/index.html","96c3e13967153396accc89e6142e4dfd"],["/archives/2020/page/13/index.html","71efc14a6783aae9df00e542414c0af8"],["/archives/2020/page/14/index.html","aec9198dd79eb67eb6f62a77b5749207"],["/archives/2020/page/15/index.html","68ef85d210aa72f348a394b5aca96385"],["/archives/2020/page/2/index.html","92d3995f918a21b191ca33922859555f"],["/archives/2020/page/3/index.html","e96ae653287d8919457e73a43438499f"],["/archives/2020/page/4/index.html","0c136c228712a9a1d59ec9be83be356b"],["/archives/2020/page/5/index.html","3c99304633cd932992d51a56407734c5"],["/archives/2020/page/6/index.html","0a10084a987e05859ab5a67e0bccb02f"],["/archives/2020/page/7/index.html","2871217040703271485c5b53a9f5e17a"],["/archives/2020/page/8/index.html","5c7bb828380d9a614925f48923344a3c"],["/archives/2020/page/9/index.html","f2b0d63ca11c9d7c6764c628c174b15d"],["/archives/index.html","70a89da6122f756fea9e35c61c5673c2"],["/archives/page/10/index.html","e8d3411917bd34a743165652ab344f23"],["/archives/page/11/index.html","872305271e1cc3006e86cf2de1dcd6e1"],["/archives/page/12/index.html","ea53d9d52b243214af382e5c9cd618a1"],["/archives/page/13/index.html","d42652b22e22b88dfea3133eaf8d8198"],["/archives/page/14/index.html","6f95b3968ee670a3212e4a6f0596f320"],["/archives/page/15/index.html","cbc545634bbecfc521d4af9da2775a92"],["/archives/page/16/index.html","fef4eefb1b0b4b044837129d155746e4"],["/archives/page/2/index.html","5e99b565d811d636808aab4e3aac5b64"],["/archives/page/3/index.html","80b60345c4c871579ca1b0a187eb95d7"],["/archives/page/4/index.html","a0e5d0e11dc30a1a2359b2e516744a83"],["/archives/page/5/index.html","a7dc1eadf654cda1ec6d5cb63e2d5201"],["/archives/page/6/index.html","6261d5d8e1a0c4243d567ddd391ab4a6"],["/archives/page/7/index.html","793aff4c8836c0732a8b1176e9e6e52c"],["/archives/page/8/index.html","5e63c20d66db412f3674b97a565c564a"],["/archives/page/9/index.html","c04a208c7065d35d6b9f3d6424deb278"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","59ca4bad95c8f60b84381a67b38629e8"],["/categories/Linux/page/2/index.html","a9315a670ae4a7be76fc9d1b90346855"],["/categories/Python/index.html","b5c29898dab1eaabe241659cec93218a"],["/categories/c/index.html","cd8b79f3b6456486c8fe58fa3f8f6b0a"],["/categories/index.html","4408a925e32f06716e1b3fef2fd69c8b"],["/categories/java/index.html","f640f973ef2a2e3b46b6cd028efb86de"],["/categories/java/page/2/index.html","3cb05d7a250335b827acef25199bb53d"],["/categories/java/page/3/index.html","c28d8923549d95524279209efeb8be3b"],["/categories/next/index.html","7708686af35a153313aecc368d4b3ea1"],["/categories/stl/index.html","ec2f0112bfcd71de28f136167bb844df"],["/categories/windows/index.html","3aad4e6b7b74c2714ff9172084770bb4"],["/categories/基础/c/index.html","e79243ca2ba9a96e2f3c4db489b126e6"],["/categories/基础/index.html","6eeafd14b58923bb96fd98f2b722905a"],["/categories/基础/page/2/index.html","e1d1d6fbb1b45e008d3a75a6aba9aa6b"],["/categories/数学/index.html","6406b814e32c974e8fd3322ca659df50"],["/categories/数学/概率论/index.html","eaca743eadfd47b9790891695a3e68b3"],["/categories/数据结构/index.html","2af06a2b32c15e138a9d4cff587d4bff"],["/categories/数据结构/算法/index.html","ab1874a9c46ccdd9668d97502fc5d925"],["/categories/机器学习/index.html","ed3e4879a34bc63e69219e7129ce1f78"],["/categories/汇编/AT-T/index.html","91166c9601c35e8368d627955ae40d64"],["/categories/汇编/index.html","e180500e8038a53e84846db8b31f7cda"],["/categories/汇编/page/2/index.html","eabfd5231ec470d9307d9aab8e13628d"],["/categories/汇编/page/3/index.html","6ecb27c384e24bca9ae5c9db5d2c479b"],["/categories/算法/index.html","1d81503b3cb785da5e960969ce71bc14"],["/categories/算法/page/2/index.html","76f32f590280aff19b4b92c8424f8eed"],["/categories/计算机系统基础/index.html","ba24ab2adfa71494239a4aa9e40e5d8a"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7a2742490cd3ff3c5541d0e5b9da1f10"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","3f4b18488a3fd8f523abbac37c2ce05a"],["/page/11/index.html","4a6ad0f07899c3fb0e2a88293097cf22"],["/page/12/index.html","0d522b24cd5fbf9320db11923951cd02"],["/page/13/index.html","a90a39e6e07fa11c9a1e2f470c7e4030"],["/page/14/index.html","ff67677dcde5e1d292d0e4453d5a636f"],["/page/15/index.html","af7591f998e1fdf0fe639a87dd3a11c4"],["/page/16/index.html","ed3b8ce76a28a88943310e7b76d4549f"],["/page/2/index.html","4bf3368f935db255d6e0654b78f91fdd"],["/page/3/index.html","ce7807506c4af4f035b25866c3f075e4"],["/page/4/index.html","6c19db305b05016ae0fc20b1870b9121"],["/page/5/index.html","3ca8243f35d17c351d30293fe891efd6"],["/page/6/index.html","af5033eeae726a0c16e23f0d320b238c"],["/page/7/index.html","bb8ca5e9fd2e1ffceb5676969a259f22"],["/page/8/index.html","b432d264d5d060963878e3ea17e40e05"],["/page/9/index.html","b514a8bab14c872ee790d8c4664b552b"],["/post/10919.html","5244d40757187ccdf983487775ad76c0"],["/post/11051.html","f0e46794635f5f01eeb12ba8fd0218eb"],["/post/11306.html","fa2d5d5d556a6bdc2e274913194e688a"],["/post/11491.html","40daa6569dd2918ae783d287dc7dfdbd"],["/post/11799.html","c3fea470f31173bfc17f7041a98246c6"],["/post/12334.html","357390c156c86635b3b4262df5d613af"],["/post/1326.html","1e853a9871824f4732944d7bab9c873c"],["/post/14379.html","5f0f0789b3ccf9bd291638232a0e3c0f"],["/post/14511.html","b0be799663dbfe3e2ad2fe98285e8a8a"],["/post/15201.html","6d7f958b96c05647e40927deaf0dd395"],["/post/15425.html","90177573cefc4bc47f1e55eb791cc1b2"],["/post/16107.html","f367be76d8aeaf780b39043f52639960"],["/post/17862176.html","9c1f35cdcce12d4a6f73996f7ea43ceb"],["/post/18431.html","bdf7d07d2c54644935aa0d1306261fe3"],["/post/18912.html","1a433589cae93856058fab61bf686b4f"],["/post/20198.html","2985849ac4c68bb7306ed195d190096b"],["/post/20ff5ccb.html","e0c5ac881735a3d4682eae9f22a6e772"],["/post/21624.html","81ca26b0657199c6400258eda62193b4"],["/post/2170659a.html","53994b2fac652b14722d8b0b7f18ff86"],["/post/22102.html","abd3f0d745135efea07934cf3403a219"],["/post/22493.html","e5470bb6c32e2689ddbb903dc1418bdb"],["/post/235252ea.html","9edf633af0d5e992c4d4fb9633dd9e39"],["/post/25699.html","721c9df78d5ee79fc78616b981df056f"],["/post/2647.html","c33239beb094524fce4f8b01808a644b"],["/post/26477.html","6c049203a940ed6718d4b4485323800e"],["/post/26671.html","03d5ad6d161a2677c94926107bbb614a"],["/post/26737.html","54c80f1865ba22bd93aec4f0e3bb23e0"],["/post/27045.html","cf9392efbfe3a6b554c16453e1701cb5"],["/post/27621.html","9f7dd8bc1dccdec0f23c4724db35c026"],["/post/27890.html","37ee8c189951fd2f8a7c1fefc7d61486"],["/post/27980.html","f19db4c91708764c6bf6680b0a17aec1"],["/post/280b588e.html","7717b8c40099a803eab553629756ecbd"],["/post/28579.html","7b4bf0d0bfe570a12ef3b7b3f846a32f"],["/post/28877bf.html","679ee6bae16f7bb0b7c95981cc13d009"],["/post/28954.html","d93ad213ccf4c8c74df075e503918f84"],["/post/29378.html","a31752055fa00ec629e83abdbfb308c5"],["/post/29949.html","6c7cc7d62d3278491b2dd1bac6d98d5b"],["/post/2ae43b86.html","3a8ed24b5c6407bf8890b83605beaa9a"],["/post/2ba82a45.html","61bbfc2148df2a5be116f4b290de86d0"],["/post/30072.html","1cc2304cfc05ae3fb51adc8e093f5711"],["/post/30479.html","68437fe49dfa58f84e3b8630b31763a4"],["/post/31a6b40.html","3d4646fb23e766ddaff4142a61be9e18"],["/post/325cdbf2.html","4d1a1f07a054fffcfbfdf8f15ef7e323"],["/post/3319ed9a.html","5e14d681d2103030dab46cdb2c773594"],["/post/3320.html","24aeec7581302752364fd440c5174d8a"],["/post/33cb1151.html","5458fcc6877e2901f19848fca9807f33"],["/post/348d4e04.html","e5a40b0ff658a6bacb213167ccbf1ac3"],["/post/3526.html","6fef0fe9b63f8701ed06c6421da1e26c"],["/post/35532.html","5638280dde7ddcf420b55202c2f70ebc"],["/post/35848.html","71d7c1609642e2950603170b1fbe9f0d"],["/post/37318.html","c6d5d15a9d1c89c85d080ad35c98e654"],["/post/37663.html","3a5f34f64bcbdf5b2ed9e73ca60fd853"],["/post/38035.html","f6678fb80f3351e4ca27cd5ee1447aa2"],["/post/38072.html","eabe463182f0e7a81734eb1292a718f5"],["/post/38145.html","39f36ce04d4a6a4a4b00b87b29bde5c4"],["/post/39968.html","91bef05fe553cb8f1d4c6e5e2b448066"],["/post/3de4bc69.html","16e88b81df44f79072d662b5df343cb9"],["/post/40583.html","7b20738751d36149f596b17363b2902a"],["/post/40997091.html","f98900e43fa128b67b611ea72a892507"],["/post/41129.html","723a58d52606c3e298176ad4bdcbc75b"],["/post/41763.html","2f295811cf3cb752b3dd54156f6882d5"],["/post/41829.html","20998d6480c203f9e92bf6b7784b216a"],["/post/41840.html","6e3b4308ae6bbc72b5a6c64d6ab5bfd3"],["/post/43817.html","1c57a39e30cc48eb2f70a89b15ec4220"],["/post/43878.html","62a2ae05369131173a6abd8832cf3bfa"],["/post/44250.html","6f90fbce0f78990ef9b2a6a9bcd1d6aa"],["/post/44336.html","b159c2c4ddb1536fe8d9f6d4a34de2c9"],["/post/44454.html","7d43a6e7e8c0d948817f542ff72ef77a"],["/post/44487.html","e4c97e8676e406efa4a216be0a34f6c5"],["/post/44914.html","365915aa2f3a0e9f982b553b47df0a0e"],["/post/4551c130.html","02ef639b524abdbd5a4eb2ebd6b1daa8"],["/post/455a4c92.html","f997bf5c20be27c13067d9867f1fab69"],["/post/46466.html","a2b172d2161c191e728f0995461feaa8"],["/post/46925.html","112a8b5f462007ea06b73e51b0599fda"],["/post/47075.html","94b4b6f37b86015901b0132b7f12b021"],["/post/48220.html","d1681817c977d4f29ffbd67fc5abc994"],["/post/4b1879e3.html","b119f17eea482cf8062a283ff0212529"],["/post/4c720881.html","be5796f70fe3eff53533b584f801c09e"],["/post/50daec4.html","b4a26eee63b86d42bc1323d9a80c5cb6"],["/post/51491.html","2e93ae7dce23a449a9202fa922eced5c"],["/post/52078.html","13c97841fe005343173b4b759845c3b5"],["/post/53677394.html","beff9f0af053be98308e0478dfdf84d5"],["/post/54300.html","b3f3d55987bc1fb6a410030005addab2"],["/post/54612.html","b07e996b8daf777cc0ad9fbb235c136d"],["/post/54613.html","c1e8db444251ad7904590fe72e17d1d9"],["/post/54708.html","e204acd9d1b273ced598cba631dda743"],["/post/54778.html","582811d9035b09df976187018a714df0"],["/post/5490.html","a99b8386981e3513a38ad59e950b5ad5"],["/post/55046.html","c9a7f2e5e3510d94504d8b61714c277c"],["/post/56929.html","4eb65c0855820106e5b0304c9c39d549"],["/post/57339.html","3896ff4ba69e7b1e89e278f0b6252e8a"],["/post/57449.html","8d786da6ba7f5d5b8913a51b4b4f6332"],["/post/57453.html","06d313557803a55fd4e2c559271f9a8f"],["/post/57671.html","c60464f65c2bce390adfe990de0cd70f"],["/post/58313.html","1077c8f8f306ca23f43fd5b9cfe75bfb"],["/post/58481.html","1818c80390dbafd39714ca3846148c8a"],["/post/58986.html","aaeda1cc8ff3f725602551ac3023dd3b"],["/post/59431.html","6f1f183fd880a0fdf0454c928e954f2a"],["/post/5951da65.html","4e56dd82ed0e5b2068c953a2ae3e6625"],["/post/5be7e977.html","331de3b128671037ec79a50fbfc460c7"],["/post/5f9e4eff.html","423d299432d170de84f9dd336795fd6b"],["/post/604b49d0.html","b1b9ee2672ca3bc161c0eac9b91c8130"],["/post/61312.html","f3d9371f3c9301ba644af126696ecb05"],["/post/61738.html","ee5f12b8e7c7b2cbb42abd541c1dc258"],["/post/61809.html","75ec60c5b25833064ad3a544cb74bc1a"],["/post/61eaf19a.html","69a1e106acc8e37c8c0cef6aecc050a0"],["/post/63002.html","7b808d70a5f995f5a5f6890449d7e90b"],["/post/63711.html","e0a7efa16eb72dbaa5e07c3b9009a251"],["/post/6587.html","710897ca83950851a12fd30f97c145ef"],["/post/6589.html","64038411199b8c1869af49d20c2b496e"],["/post/6880.html","6717259a590f92a29bd0d89b4041c40b"],["/post/70263071.html","d222ed5fd2fd295c5b46526e71562f57"],["/post/71038564.html","9b274bce743d1a548b94902ae3f344a8"],["/post/7119.html","0684cf80e0de2794227cd9d092e064f7"],["/post/74e7fdff.html","cff555a87cc48e8dc100ecd11ec118a4"],["/post/7502.html","6c6db2863b0ec8c9b5bb21e563a99ed8"],["/post/7564.html","d48a9ab835b89920a75bef121558e83e"],["/post/766f9b60.html","986458022e87d09514292d0c72c5779b"],["/post/7ca31f7.html","477c91354ca245d9b5ee23f2ffadc95f"],["/post/7d1c86da.html","c8634f7ad99984faf40dc0caeb21cb4c"],["/post/7f3bcd7f.html","24dc102b4fc72968f4b57f66339cbfad"],["/post/8039.html","2753ab5a020c204eedf7a0242456f7e2"],["/post/8050.html","6f9532ebec08ff529285caab8e14f48f"],["/post/8072.html","75abdb063a160b1f39ebf227cb4a0b27"],["/post/8274.html","ab62e094c326efc807c3a9bad1cfefb0"],["/post/8372.html","12e0ae1360dba14034b9dc60b5556066"],["/post/8498.html","927a3491429b8f811c1955b7a84144fc"],["/post/85b4e13b.html","e453131ec593df8524eeabdfb97593d6"],["/post/912b2566.html","36adb489c9af7f5a041d0785931e4198"],["/post/9187.html","993fc46269a7efe8a31e0273744dafdd"],["/post/9197.html","c0ef2b34df6ccfc94a71990b40904de1"],["/post/94ceb2fd.html","dc99faedae81234c52e107f85c9064fd"],["/post/95495db.html","438a3f2927ec286be40f1aaaa2b8a114"],["/post/97246020.html","9e980bf4818896498070e0232ad16947"],["/post/a3a786d6.html","f4016475780ffbf155c60b7b8fda0914"],["/post/a444b428.html","4b9cffe10028635c4be67570d84ef82b"],["/post/a50b8908.html","388cd2ded4ae340e461447f2f8c233ea"],["/post/aa1eade8.html","4b49053ecae84fdae9b7eba4f0cafe89"],["/post/ade8c6d6.html","6f131b0b05ab2da95a270d6b514d9a2d"],["/post/ae8362df.html","07b95e4beca1f54fe6a6345e7d72517e"],["/post/b4c1d206.html","8ddc51dbc42ead8625b7b4d48987ffc1"],["/post/d431fab4.html","d2103bbd27af5c73784b5db072907989"],["/post/d5381517.html","b558bfa9704cd2a620a8e136263987ce"],["/post/e058ffd8.html","e57d2742472cf8556640e4d3ffef39f6"],["/post/e0f8cb74.html","66c65f5831c3af83896600d72a0a1bd0"],["/post/eefe591f.html","b28a904477d6fe82f88098bd1afde865"],["/post/ef296a07.html","fcc21d1c85d9f624964278446f7acbb9"],["/post/f201f9fd.html","7ecd64e355263141a7721f86e9d0d0e5"],["/post/f79e4123.html","cb05ce8f6e275a2e6337eacf7d390c20"],["/post/f8648a1d.html","5d2425a76f1d5ace88dde18062f07e59"],["/post/f89cb603.html","1f629a36e48be560d8868a75c054d0b6"],["/post/fa288682.html","c361c6be2b7142ccb5165216cece701e"],["/sw-register.js","160358da2263c3e8eef1b37e253c0081"],["/tags/AT-T/index.html","e4e31e6e72496ae0d2e3368277165e1e"],["/tags/index.html","79c4f9a392ac5b6e0fd2c19323bfd3b6"],["/tags/动态规划/index.html","8cad42e34b42203f955d297e543dd660"],["/tags/字符串/index.html","55672fdb7178e8681401467ae1c734d3"],["/tags/字符常量/index.html","8638ad7fdff16c59cec805497aaf101a"],["/tags/快排/index.html","29cb90a15a4665d46ffdc119ca55e304"],["/tags/排序/index.html","00bedc6e5f9d85813108c4ae936b7d1c"]];
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





/* eslint-enable */
