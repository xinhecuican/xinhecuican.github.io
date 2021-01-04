/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","621e6132e938d9a0285d69e4cdd4cf3c"],["/archives/2019/index.html","173b5aec424a169ccd97098b5f3c50e2"],["/archives/2020/01/index.html","c5811b1475c41b810b315255e014d6b3"],["/archives/2020/01/page/2/index.html","24bd29b5885ab5ef75773c04ed95c0ab"],["/archives/2020/01/page/3/index.html","bf7be7dd4e078b4ed99304458e32543a"],["/archives/2020/01/page/4/index.html","e64f6ff1a2f558cf2e58fddc4fda9c77"],["/archives/2020/01/page/5/index.html","b10712212980b77f8a7d5dd883eca9e3"],["/archives/2020/01/page/6/index.html","dbf6b45cbead2016134f12e5fa07b8b9"],["/archives/2020/02/index.html","b5507e8b111660443ffc24b3567e91ee"],["/archives/2020/02/page/2/index.html","c36ab0a8bfce26ce53c512e958334723"],["/archives/2020/02/page/3/index.html","11e06626d35e08edefbcea3198b3e8e5"],["/archives/2020/03/index.html","c0e3544ffccfcfe969cbb335e366483a"],["/archives/2020/03/page/2/index.html","a61f20d3084c49be45b73d29e230c411"],["/archives/2020/04/index.html","21614f204920b3aa387dfe9cda22a7b3"],["/archives/2020/04/page/2/index.html","6e01e360391e7ef138ad129a9eb8a087"],["/archives/2020/05/index.html","8bd318e92d6b9edb619036402a48ed7e"],["/archives/2020/05/page/2/index.html","6e6b4074d703133806e5710e995b0dae"],["/archives/2020/06/index.html","7f7ffbb9c9ba213fa6330e59bf1ef827"],["/archives/2020/07/index.html","93e3a6334f83806108d798785df85a20"],["/archives/2020/07/page/2/index.html","85c9894a0d65f772b3dd8a7921143de3"],["/archives/2020/08/index.html","890063275d079709ec011c1b0baf2813"],["/archives/2020/10/index.html","b7027dbbc06351cecce9fcf8a86cb043"],["/archives/2020/11/index.html","1628ddb2bd2805cf2dc63c93dcd6fd88"],["/archives/2020/12/index.html","c4e812eb20830300d582db2b4c25de5c"],["/archives/2020/index.html","6a240fa0dd4691ee6d0214121a122b1e"],["/archives/2020/page/10/index.html","7fc90d523c3e59d2dda78622884a4cda"],["/archives/2020/page/11/index.html","471fe7c16fac48269b78f8c18b496791"],["/archives/2020/page/12/index.html","30ee249d53fd6fa8d5079bd61eb0f027"],["/archives/2020/page/13/index.html","833ed4f222bbb3969f43336c711baa93"],["/archives/2020/page/14/index.html","707e161dfc5b5ab793d4a32776c81f2b"],["/archives/2020/page/15/index.html","893b2b50cbc0f16e7ca00d93b4d4d45a"],["/archives/2020/page/16/index.html","253832725b56f7f4db788db7e7dc2b82"],["/archives/2020/page/2/index.html","645beb9076a7d6c6faffaae4e31e768c"],["/archives/2020/page/3/index.html","aaea54b1691bbd951b8066f41ebd6bcf"],["/archives/2020/page/4/index.html","c6fbf66c4388699041d26e75b43e057e"],["/archives/2020/page/5/index.html","acdcb8cdef76231ac4b9ed4f831e0bf2"],["/archives/2020/page/6/index.html","dd8c53e2b7c8bfa295dd52b79f1353df"],["/archives/2020/page/7/index.html","cf5fe215d67a0507013cf67fb35b9a92"],["/archives/2020/page/8/index.html","4d66f7e6b4e872b22349d51f7978d8ae"],["/archives/2020/page/9/index.html","d33f76c6652628410df35886792fd606"],["/archives/2021/01/index.html","5257f79d3ae01e6f459e9ea0387c7851"],["/archives/2021/index.html","2f59f56ad1340659d6d4a97757c8b2ab"],["/archives/index.html","8f62a888f35fb7497ac0a6f3b8a27f0b"],["/archives/page/10/index.html","14d05c10afebd1b9e59fa93849a184e0"],["/archives/page/11/index.html","f57b411b1f4df01247984a5860e5158e"],["/archives/page/12/index.html","2a5408ae0e2d958e64860b29964dc856"],["/archives/page/13/index.html","ab01f0cacf044783c9107691e5264c63"],["/archives/page/14/index.html","05dd59429a9695dfa88a3b302822312c"],["/archives/page/15/index.html","c99e861cc477aaba772fdec9bff0d534"],["/archives/page/16/index.html","3ded6543ffa864ab6525871680d0e8cc"],["/archives/page/17/index.html","6a36e4f3a9b2ec27c06569a22593c575"],["/archives/page/2/index.html","1b89f632cb4913a42b565efeb8c26890"],["/archives/page/3/index.html","a108cda140ea576e2b259c0131af9a6a"],["/archives/page/4/index.html","51a5902b057d188967bd70d3309b94e3"],["/archives/page/5/index.html","f56d3319ee3a861268cee57a47941912"],["/archives/page/6/index.html","1174aaeb40a011a518c3ddf1bb9a5bfc"],["/archives/page/7/index.html","887aa09bacd97fa6be0cac73ff553b31"],["/archives/page/8/index.html","a5aed4431f125d82549ca27263e747b8"],["/archives/page/9/index.html","cf703589b9a3bef941741a87a97b1b45"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","292253ddf22c5ea76026b62dee0a7fa7"],["/categories/Linux/page/2/index.html","ab5d41459694887ab4fe14288a2276d8"],["/categories/MySQL/index.html","63fa92b2a28aac2f9b6bb31a736b66c6"],["/categories/Python/index.html","028078a333628298e3bdaa7453ee1462"],["/categories/c/index.html","627c58822b7c0c7cc88473b722c69888"],["/categories/index.html","923c0264f70dc9aae8010868234caebf"],["/categories/java/index.html","271f6e96380c45359f75daf5df1bade7"],["/categories/java/page/2/index.html","b841225a7e6e4041f64533aa5337e062"],["/categories/java/page/3/index.html","25b7d8051ce20b8ef08a7ac3e5a2d23c"],["/categories/next/index.html","384a1393b741a698458478d5b616edeb"],["/categories/stl/index.html","c45701bd82bb82bff71d1cb83f2a791b"],["/categories/windows/index.html","5774226269a58e5e40e7020484f1f2e9"],["/categories/基础/c/index.html","32d735e797f30ecb02c17cc9b76e4234"],["/categories/基础/index.html","93b4ba30d675db750ed3019c36cefae9"],["/categories/基础/page/2/index.html","e7a306c4ec2d582910e923e693332040"],["/categories/数学/index.html","3867f3089895e6325f7051b6134e3052"],["/categories/数学/概率论/index.html","245ce8575112b843ab428be74698eef0"],["/categories/数据结构/index.html","a6a9da50ad2e1d7dd6f0eedd52ced41c"],["/categories/数据结构/算法/index.html","87a404b7677e78ef6d18e0a207efd366"],["/categories/机器学习/index.html","7bb19bfe15d0c8c716a57204501ee574"],["/categories/杂项/index.html","c57212dba90182e8fefc3c8936ec55a6"],["/categories/汇编/AT-T/index.html","80770bf7976b72f1f63afc5af6bb6854"],["/categories/汇编/index.html","b92f5b366f22fa8e15db317e98717d27"],["/categories/汇编/page/2/index.html","0df47439ac881fa7d6f93527a4792073"],["/categories/汇编/page/3/index.html","b1fe0b088ba6ffff1d9603638c229160"],["/categories/算法/index.html","4bb7d2d52545ebe0da061d38a06150f0"],["/categories/算法/page/2/index.html","8df329dee65b991f0617f6638c41c74e"],["/categories/算法/page/3/index.html","c4fcd3432b95b31f50695e02101a34ee"],["/categories/计算机系统基础/index.html","3a1542e956075b0f3e6c80834c341496"],["/categories/计算机系统基础/page/2/index.html","75da81307311161c8d4c6e690814ff81"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","11437b137f405dee37339efd32313c68"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","533483ef88f1e351bd4c0442b9aa29b4"],["/page/11/index.html","d49997b2bb7766242fb7226d710fda4f"],["/page/12/index.html","12170a2b3edeff83abbaba8214c19ab7"],["/page/13/index.html","4cc80af2ab0bc881629685f483c34cdd"],["/page/14/index.html","7c7afc4c7daad316ebb725f9ed281543"],["/page/15/index.html","9b33d724dc4c04442fb7ddd5ad8f7607"],["/page/16/index.html","b3707c2dfd9429756544ee37ceaed039"],["/page/17/index.html","973d019d56b5716530c925877b85eb5b"],["/page/2/index.html","d16a01d427a154d62bff0051df073077"],["/page/3/index.html","7532f33e430b7749df17e11ae423b6fa"],["/page/4/index.html","cbbe4f1862cefd0a997391644c1593a1"],["/page/5/index.html","9e9bb603e8007cbd4c0f2665437e0bf9"],["/page/6/index.html","868c43f5ef1ef5c68783cfcd9749ae18"],["/page/7/index.html","37b214ddb3de42371685ce2206bb7cc6"],["/page/8/index.html","4f540b6e7b779ca89cd4169728b3bed6"],["/page/9/index.html","f6309a85a499eed0978ecfb935b288bb"],["/post/10919.html","fa3adbd08feb8342a148d24996eca2d0"],["/post/11051.html","d5eb9a00417be641ada2c9cb8199abd6"],["/post/11306.html","2bc4eaa21aa27f5adc147141ba7c2d5e"],["/post/11491.html","81610d235d7c6e99406152919e8f8c7a"],["/post/11799.html","1a5293722fda2371eca6d4525c27972f"],["/post/12334.html","503304c85199ea204b89fdd9c414113b"],["/post/1326.html","3eb53e1367777df01e2d10bff201caee"],["/post/14379.html","9b7e504524d593b233afc304a9240710"],["/post/14511.html","3a7781abedf1333036fb5fd52adcb0d9"],["/post/15201.html","cbb08800b8bc1de2f8110555486ad369"],["/post/15425.html","128cad0fbf887b7ad84aa4bbe9793aaa"],["/post/16107.html","4b04ffc281e7f2cb35df57363aa1756e"],["/post/17862176.html","f5f4312bec032b6b5fa86cac2990a1e1"],["/post/18431.html","fb066452cceb76b41ca054de93ba11e6"],["/post/18912.html","57bd9ac2d1e511582337c7760d67b72f"],["/post/1b9c8662.html","56c533dff7b7fc5a0bc7e4d124e532c2"],["/post/20198.html","fbd0204b48523e8a312f2a26e36ede37"],["/post/20ff5ccb.html","3d0214d01f1b612d3ee9b1c037af0816"],["/post/21624.html","9f6be69db673a6e8b57f45e039752f44"],["/post/2170659a.html","0817b3581f8a681d49dc56d330f24ed8"],["/post/22102.html","0d41153829a56b8e22d09ed99928c393"],["/post/22493.html","de2e23b084791358750a98a67fa29ec6"],["/post/235252ea.html","45946bea6355aa1133f9b2961febabcb"],["/post/25699.html","03fb31ad2f27de707ffead28f2a6143f"],["/post/2647.html","2e29d05aa4af6e32222d5aca95b1af60"],["/post/26477.html","ebb3698bfd3935531396fe9450fb1878"],["/post/26671.html","b57aa2a5b9b27069b273ded0cb8137f8"],["/post/26737.html","4cf9d8796e890c4fe2d6774523583951"],["/post/27045.html","2cb967f7524b8cf81e444e8c1715f7d7"],["/post/27621.html","5147c6106f244462db982724f3b903b4"],["/post/27890.html","b0a205e9e19618368cc3a18d24932611"],["/post/27980.html","c4401b62eeae79279c85b6c7b1203483"],["/post/280b588e.html","81d24da39891d9061297e50a92cae0c3"],["/post/28579.html","7a78daff08e0100146e728015dfb2634"],["/post/28877bf.html","8f39774aa9ca335548f26fb7c1f9df1b"],["/post/28954.html","453c81e3ec16da4403e4c3981812645e"],["/post/29378.html","c2e14f1913d942e3b12dd71417907ad2"],["/post/29949.html","2eb571aa9421127c584c8d4a06eee1ae"],["/post/2ae43b86.html","9ee13ebaf81fa3afb8e84f008741ca06"],["/post/2ba82a45.html","157300b0f9cb2bbe8af78b4e7bae0c36"],["/post/30072.html","0ea4bdd77e8a517d6a40f962baa0902c"],["/post/30479.html","cb64fac34b387e8933b12ef122eed340"],["/post/31a6b40.html","f6b8a4f34432a29443b9121ca251024c"],["/post/325cdbf2.html","d33f9a1d6d21da9df60824acd899d08d"],["/post/3319ed9a.html","a679d0f18c3390535f2150a793f93224"],["/post/3320.html","790e53aa8f2c81bdb647ba688a7db794"],["/post/33cb1151.html","85f362408b6d89daf90d8da2fceeff69"],["/post/34811d5f.html","c052e07ab796ecaeb1c96536f379e274"],["/post/348d4e04.html","65c3a8ae830472faf24423fe8adb2fbe"],["/post/3526.html","4eef2047089be87fff92596d32a0fa9e"],["/post/35532.html","f2c44eddfad077cab1d2cfd25ddf0478"],["/post/35848.html","87050460f7d6042ee7e4cc180a03d7f1"],["/post/37318.html","c635b6225704ef1e31b237f4ac0eec3a"],["/post/37663.html","94aa93f7eb1210af3f640321d53d3f10"],["/post/38035.html","e91e3f692e31eefe218539a611db7c48"],["/post/38072.html","4e5d9e8965f7abab4ac7b6eee5f63fa9"],["/post/38145.html","ed8416aadedaf9c3546ead44a9f36c84"],["/post/39968.html","67d5cd0b91605a26fad80a94b178e9dc"],["/post/3de4bc69.html","8f019bc0f55d51e0fb584a27d3812dd4"],["/post/40583.html","a266072a3eeb22abc4ba7deabe28bc81"],["/post/40997091.html","a902750e8a265478a7590698da4cfef8"],["/post/41129.html","405b4d41da92ec7d2f661f6b8092adfc"],["/post/41763.html","57c9505d44b8f610ebed0c886a6ef5c2"],["/post/41829.html","d07b57bf9d4c12193590391c94b75c75"],["/post/41840.html","87948de3e3643e7bd41e45d6b46b7643"],["/post/41e39f2b.html","6f74398f6a2ec09b1319870c063482b2"],["/post/43817.html","8c955caf933d3ea7cfbcb14d52c2f4d6"],["/post/43878.html","a408099eb5fb034c607f4a10f5719db0"],["/post/44250.html","5849678d76e7b1b8dd1c7b8fff9a4ad4"],["/post/44336.html","fc4115201e14d259529a031c786f1ef5"],["/post/44454.html","6a8af5bf0aa1bd6ebf8a674f16e3e5f8"],["/post/44487.html","3c2691cbd36084c34cb65dbc7024da86"],["/post/44914.html","331e648ace4ec7a75145e8074276739d"],["/post/4551c130.html","d6ea44f534f3dc74b3f49eeb90b7385f"],["/post/455a4c92.html","267c64a7bce247b1f5a6e66eac5b1a95"],["/post/46466.html","720566bca49abf4e01efae0d63536d90"],["/post/46925.html","fc8651186dffce9bdbbc9ce0550d01d9"],["/post/47075.html","7e1980d46ae3e3003b196f5a5561009f"],["/post/48220.html","7e10888ecfb6b61781554fb026687f32"],["/post/4b1879e3.html","4d487f4dd9494f4a998955a94f345515"],["/post/4c720881.html","49e32d2e66ce13a7023fe831a57a9cb8"],["/post/50daec4.html","f7800cd23c263a0912a51b1b3ef31a9c"],["/post/51491.html","8c0fb919d67b460bb246293c157a23d2"],["/post/51e63dcf.html","11aa2d8eeaacbec24b26b7f129c834f2"],["/post/52078.html","e2e365fb5f125e332a5ab9cc05d57d4a"],["/post/53677394.html","0e3c9d6264ef02443d430b14a5154a3f"],["/post/54300.html","568748a3ca7b5481de31b8b777c100b1"],["/post/54612.html","6b3a5b2c7b26a8cc2f92e0de8fd2b858"],["/post/54613.html","53d07fc6632c52c542057c76f983d969"],["/post/54708.html","f2de71297c83bf59b48ec647ba860ca5"],["/post/54778.html","6310e3fec55f1d27c787f1851d6d2017"],["/post/5490.html","680b74c6b5a855c2bd8e71b846e73856"],["/post/55046.html","6d51974959413b7a590f2bbef6295e2e"],["/post/56929.html","96ec312e752f3d97f4d99176a82fe619"],["/post/57339.html","2d7742ec8b689684f648982797536a8c"],["/post/57449.html","452e735ff309f46e3f01212beead5ee7"],["/post/57453.html","5983d91c3e453e8c409f042f78e7b97a"],["/post/57671.html","7706d7ebc3bb8d94c0e10658d5bb91c9"],["/post/58313.html","b6d7b1cdbe811220894c688a64702c5f"],["/post/58481.html","966ac54e52ebdb35cca746a359b1d47a"],["/post/58986.html","e0a6df00b9f9d38980900fe5d9d81529"],["/post/59431.html","d044b7863488b289604355d61b454996"],["/post/5951da65.html","26b2de4702bd989f09a86464107b3102"],["/post/5be7e977.html","841f2c9beaad273d8259a9437508fae7"],["/post/5f9e4eff.html","46e9c8b19be447ca6b17124615454b49"],["/post/604b49d0.html","93f3194880216c0bdcf8f19cf5556ef4"],["/post/61312.html","70ca778d33c868c6272af448ca5f5392"],["/post/61738.html","38586430d5dc49311552e564b4b5f9da"],["/post/61809.html","da6cae88b44b35e5f7057db436c8e128"],["/post/61eaf19a.html","c7ec978695d2c1fe160f412ae6b6089a"],["/post/63002.html","a600269b90d6841d65feab859f6a5977"],["/post/63711.html","76727bc0307b9c281360c81a44ea486b"],["/post/6587.html","79a92a6b64a928b7a05be6777e93c0f8"],["/post/6589.html","b067a8e719e7840c5b91fd720d1509fe"],["/post/6880.html","2a492ab0b5cd04ea503bf73ab0d768c7"],["/post/70263071.html","5296c0f72d05f9639e3b7fbcc4bcc960"],["/post/71038564.html","9def2e3b123de4b4455e1f1b84eb9efe"],["/post/7119.html","0b998d82b4651edf25cb61220d346204"],["/post/74e7fdff.html","24b1d7a74a53c271bcb52e6caf4fe6ef"],["/post/7502.html","69e2618b32bc181121fcbf43f71d1f7f"],["/post/7564.html","d75adb19804d77ef87f14b0f9fc4d82e"],["/post/766f9b60.html","5ddbf3d055617408256f8ad4f0a9c347"],["/post/7ca31f7.html","a3b4adcb5c1ac4ec3e7ce3dea0306282"],["/post/7d1c86da.html","1de4efde37e0315439a2baff02740cd8"],["/post/7f3bcd7f.html","5e4282862eb4e566ad48bac6921d8a7e"],["/post/8039.html","3ed6d25c58231eaa1659997bbd4661d5"],["/post/8050.html","24e1a93d786ca442982b77915e8bbe6d"],["/post/8072.html","8b0f95be7d1633919656bd5b6f71121e"],["/post/8274.html","fb415769062204dc074b34a85c9d2c72"],["/post/8372.html","bc29ae2d40ed7e3e26e1939b285e7edd"],["/post/8498.html","76fcc435c416bff2ca5f053ad41fa88e"],["/post/85b4e13b.html","6746c60dff18d2ef5bd5ee11aa8c0d79"],["/post/912b2566.html","42985a04fc5577488bdf5886905fc148"],["/post/9187.html","ba7131649eb5ca8ec2bca1f4152ae1ba"],["/post/9197.html","d9ec8c8ffcd1c6f6cd31fdd893c523b1"],["/post/94ceb2fd.html","c2a74e138295af11be9436b28b97c980"],["/post/95495db.html","9f471f0b5a48b47a4cea42ce67d93bfa"],["/post/97246020.html","9114f0556def05476535f5294bcff33b"],["/post/9954ba8e.html","1490c23a1d2fd684a2a9740aea8ae121"],["/post/9d855db5.html","574cf5160f8e534beb2793ae17c69c63"],["/post/a3a786d6.html","9667dbba9257d3838eaf10e48654312e"],["/post/a444b428.html","aceb6aee20e48a4863cf2af53018ac74"],["/post/a50b8908.html","78f414ab4359d247aceec7f1ce58e6ba"],["/post/aa1eade8.html","c162a7af4e5e89e670b1f970482bc3dd"],["/post/ade8c6d6.html","52a95e5e3928b19a99077aff0621a719"],["/post/ae8362df.html","a96f2b3f6d7e6d62f85051cce874019b"],["/post/b4c1d206.html","0f7545087d28fd87f437d2a0a61f50fd"],["/post/d213fc7f.html","83efdf89e8e5d937a2fca85b9b67e6c2"],["/post/d431fab4.html","d9d5cdfdd54fce89fdaa2cedd1383b7d"],["/post/d5381517.html","9aec6e86bc5d616da57b7b04782e88c9"],["/post/d94f88de.html","1a5ca35ca5aa3741a26ec097148eb686"],["/post/e058ffd8.html","931554045f0506570af9176b2e7d523b"],["/post/e0f8cb74.html","f7e6122ae7552aa4ab6abca785bf9153"],["/post/eefe591f.html","07692de937d1434054c130aed258a3dd"],["/post/ef296a07.html","84a3807fed5757c2b7fd63e5cc740e87"],["/post/f201f9fd.html","57a08c939a1484f15367e5c900e86c67"],["/post/f79e4123.html","37f146eddf0d924a522398492d84cc56"],["/post/f8648a1d.html","83b9d75c00db70ce0754b6ea7f226470"],["/post/f89cb603.html","b88f9b8708538b8d08332bc066237ef1"],["/post/fa288682.html","33e77c151818d89f82c752f064f36d9b"],["/post/fb98053e.html","f584ccded0eab5af88cf148547b6e359"],["/sw-register.js","6ed8c1cc1294b3ee2ad31c7f7dcf5b79"],["/tags/AT-T/index.html","c770107bd61d332e251dcf292f676711"],["/tags/index.html","9d90c3d42136a8fff51a7ca9ea3eec7f"],["/tags/动态规划/index.html","256a16cfdd757a23812bb443ff46ad21"],["/tags/字符串/index.html","faca733c5f960d15f4fbcfac7e00f1e5"],["/tags/字符常量/index.html","3cde4f69817669f35ab09e2a904b6e00"],["/tags/快排/index.html","1649e5161e28583ce3f98be5a3352d26"],["/tags/排序/index.html","b02e6b56f9619c0f5d437db4a2233f7d"]];
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
