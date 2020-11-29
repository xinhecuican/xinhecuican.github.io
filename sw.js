/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","d9b43e9efc5149ecb7288407c9f21032"],["/archives/2019/index.html","acd6dd6eee5a875e5321c27202155db1"],["/archives/2020/01/index.html","cb48b563332dc4809c10ccfdc376ecc0"],["/archives/2020/01/page/2/index.html","a03621733a4196314c454f3657ab8c67"],["/archives/2020/01/page/3/index.html","54b883af7a6c6546a208aa89bbced86e"],["/archives/2020/01/page/4/index.html","f866408287125d504dfd9a8dd8518979"],["/archives/2020/01/page/5/index.html","3e29676fdaefbdef81003f578aca11b9"],["/archives/2020/01/page/6/index.html","f5c82ff383df44a784018e7811a3583e"],["/archives/2020/02/index.html","e5a20a6e5c700ca7e698949678c82b73"],["/archives/2020/02/page/2/index.html","ef4b952d142eafa0a69583396f1a0f60"],["/archives/2020/02/page/3/index.html","cea17d66f22bc2386e4d50b339ae9f29"],["/archives/2020/03/index.html","3c51bd536dd91ba46527d9b7d01c97c8"],["/archives/2020/03/page/2/index.html","2996e38ff05c40863738cc218f6b6a6d"],["/archives/2020/04/index.html","1facd374b5f3df8eac35134d7d14815d"],["/archives/2020/04/page/2/index.html","6ad4785e69436e091e37855b00ff266e"],["/archives/2020/05/index.html","49a82feb6e28126f82695776455565ac"],["/archives/2020/05/page/2/index.html","3dc32d06f2b2fa48aac85e1eb349ba8b"],["/archives/2020/06/index.html","5c143e6c8b2a88b322a17fc401a798d0"],["/archives/2020/07/index.html","5e90e636354e094080bdc8e773207fe2"],["/archives/2020/07/page/2/index.html","088b0cb2b47f985b1ab6630a680e58ec"],["/archives/2020/08/index.html","4649110c9f17276b3b949a44b5e01425"],["/archives/2020/10/index.html","0598251b41cae25fa85e7399589ab801"],["/archives/2020/11/index.html","49f2894e7dedd063a7a1a91c540bddfa"],["/archives/2020/index.html","2a71929d2c4e24b1f250a0b25f4f7296"],["/archives/2020/page/10/index.html","84d0fb363ff8960d272f790c601d4132"],["/archives/2020/page/11/index.html","e81a8941a18436daaf5aa46f55f8e1f5"],["/archives/2020/page/12/index.html","628179b638cc73c598633353c57f4f79"],["/archives/2020/page/13/index.html","473c4f2130a151d60b5222e721a7995b"],["/archives/2020/page/14/index.html","14913263185b7b96636858535ecec902"],["/archives/2020/page/15/index.html","139d8de3818c3bf7117a7fddd69a9a22"],["/archives/2020/page/16/index.html","df6048bc4a09d57eeb2d5f8af9cb46f7"],["/archives/2020/page/2/index.html","fd9599e45288e4a0310de8ac6afb780a"],["/archives/2020/page/3/index.html","2612a59b3e209e32b2f51aebe5d78ddd"],["/archives/2020/page/4/index.html","080ef0555e65a707806083303965befa"],["/archives/2020/page/5/index.html","769f2280441b50ee956c76bf01625a79"],["/archives/2020/page/6/index.html","73fd75494f76294e44288d84ba796303"],["/archives/2020/page/7/index.html","fcf0d53bb798e81ad9e2b2b15e0d8f86"],["/archives/2020/page/8/index.html","73d3a5160bf2bd89a8a945c3e54a9585"],["/archives/2020/page/9/index.html","3553c9ec93d077ba50c891b23498dde6"],["/archives/index.html","ee80b59d933eb289e65b7d9caa73905b"],["/archives/page/10/index.html","b43f63196939ba64fd58335087993c09"],["/archives/page/11/index.html","e0ef528886038246decb478578fb126e"],["/archives/page/12/index.html","a42ffbd2f882784c28310682fa679cae"],["/archives/page/13/index.html","1c524ce016dbbc573f8d30bcdf094fa1"],["/archives/page/14/index.html","88c148cde754543fda10a3b18139a56d"],["/archives/page/15/index.html","7214a5668d4d495dc1ef6ad92233a892"],["/archives/page/16/index.html","3b7ab2df19baad7ffba4d8197a2b2e96"],["/archives/page/2/index.html","d67c50b5aa42e15416a0bbae8015cc0d"],["/archives/page/3/index.html","cfa00162cdeba7d0d5943166a91149e7"],["/archives/page/4/index.html","69b106ed5092773b3b6060992603ce5d"],["/archives/page/5/index.html","292a6e98050da4ffe38c672d6ccec3ce"],["/archives/page/6/index.html","8d54f4c10320e77bf5635a1d7041a60b"],["/archives/page/7/index.html","7520cf884fa0035054ba7b02c70ca9c4"],["/archives/page/8/index.html","0d418953b1fe24831641e702b9018856"],["/archives/page/9/index.html","b59f0f0177c448fb7eddba37845b56e4"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f723fcd8d86198e168a65fe35bfce8bf"],["/categories/Linux/page/2/index.html","05168061d857b3b49373644dc7a9910c"],["/categories/Python/index.html","fa6cb3a188d3c2deb660e1c6c3fc7cb3"],["/categories/c/index.html","b87f589806c23c855fa9199c5782abee"],["/categories/index.html","6a9c6747a3afd99bb723acbb18db1991"],["/categories/java/index.html","19e865a69e158e43dc4a92945eb6ffec"],["/categories/java/page/2/index.html","fe3ab86487f4afb957db0ed0fa009293"],["/categories/java/page/3/index.html","42904689b4e06fcdbe9446d8cfe94beb"],["/categories/next/index.html","e740895f2971dccecd720df15408e284"],["/categories/stl/index.html","66ad561727fabf2cb3fbc47d4296161c"],["/categories/windows/index.html","0fb6279356d962a954409cbb426a1daa"],["/categories/基础/c/index.html","867467957c622d9845ed8bb8d40a413c"],["/categories/基础/index.html","e5af4802a5a8d4b805f541ec82e0ed41"],["/categories/基础/page/2/index.html","a3bfa7c004f26299b2ad36e0e33c05d7"],["/categories/数学/index.html","e2a0704fb94ba2e1dfc7e3b3594d3ff0"],["/categories/数学/概率论/index.html","58813d4bb94674f69d33f4c3b5002219"],["/categories/数据结构/index.html","9e6dc65d951625478433e71486f194d1"],["/categories/数据结构/算法/index.html","7c367005b0d64460131845c4efc82314"],["/categories/机器学习/index.html","b47115e75eab77bd32d76174d26fd353"],["/categories/汇编/AT-T/index.html","d86f57ed2a48445f48b0aa9f46113437"],["/categories/汇编/index.html","d8907b130c6f3025e9e5377d4ee22fdc"],["/categories/汇编/page/2/index.html","e086ac558444aa5808f16c1287eb75db"],["/categories/汇编/page/3/index.html","2739f2cc46360109276c70e3f81f87d1"],["/categories/算法/index.html","b19a50c3860aa8083dc019b6cb446e17"],["/categories/算法/page/2/index.html","788c34a81c12656cc3d6740971eb5b58"],["/categories/计算机系统基础/index.html","e64c739c49f43ee97e11cf7ed10c849f"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","79082cee169ac6c872e67340c8c8a431"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","409c45c267cc42afc1b5f19f4da29a91"],["/page/11/index.html","85c4930fbf9663c70238c936886b21f4"],["/page/12/index.html","c162604e92e8896cb13abada031cbb76"],["/page/13/index.html","1731813be50cb717c525b9add3348e21"],["/page/14/index.html","45dae22f77e9f82c4865e63935e3512c"],["/page/15/index.html","ff170e83f5d1096a5b58eb1daa4dcd97"],["/page/16/index.html","eb25859131bbc12f3b7b0debc2716383"],["/page/2/index.html","18f6fb84975ecb4b6c89c6aad4b79f75"],["/page/3/index.html","17e0fb89158a1468fb99aa7750c69f05"],["/page/4/index.html","d705dfab6f0a7c0ae52d62c8c57b49a6"],["/page/5/index.html","e8182e2d7d1e3e15e72ddd73b133be3a"],["/page/6/index.html","60e07ce27a85ef9af978d6859648c2c1"],["/page/7/index.html","3f3b1475edb7a13d9a23215afaac2f6c"],["/page/8/index.html","3b76e06d1072e2ec7d8d355ba69c0010"],["/page/9/index.html","afe2bda8cb9a0ccd6b8bad1f1788346c"],["/post/10919.html","a2da22c6e56bde8fa9ba35b69076f51b"],["/post/11051.html","fd8a47ae655960666af76e77d22ebdf5"],["/post/11306.html","a9a75562132d289ba651e37092c8d508"],["/post/11491.html","d12e0e6ffbf72c3897445562f7e1be8b"],["/post/11799.html","ab112a1edc09778fe0338f43afcb76e2"],["/post/12334.html","f021de6235dac810cba6849652c9bc0f"],["/post/1326.html","8f9a15ca2a29b8cdf147e689862b014c"],["/post/14379.html","b53b448314cf9a1cd6db30f72905c8f8"],["/post/14511.html","bbd7e83996f12debbdf6a1d376fae628"],["/post/15201.html","a9403ad0e4cad4b41d168efbcba5b8f6"],["/post/15425.html","ad8638cb4b09a6d2650e522743574d99"],["/post/16107.html","457aa569a118b0044a3c67f4eb2b0b1b"],["/post/17862176.html","cc849ef1ad070f7f4dca85e8948938ad"],["/post/18431.html","aec0a5ad22f061268074b0de00236e3f"],["/post/18912.html","b5f7f5339ac600951b8e7007719b577c"],["/post/1b9c8662.html","e283264ec1440cdd9ccd4be264cf96db"],["/post/20198.html","88ab2e07f606c1928241d99862e49462"],["/post/20ff5ccb.html","0dfb4e43af3722739b20d035dcba794d"],["/post/21624.html","5429126c5dafc2833fb1891484cbb9d0"],["/post/2170659a.html","ecaeb1eff1f232b00a6b51900fba907d"],["/post/22102.html","0b5c4742a70eb899e504a7ead8e8916a"],["/post/22493.html","4b2f6a55e032cc504f54df5b2bf46720"],["/post/235252ea.html","db4fcf0ad3000319150673c29e989aa6"],["/post/25699.html","c6e8dca42f2a97fab8100d6c656cec30"],["/post/2647.html","4a512a79c44a56ae656fdb2e076ed9a1"],["/post/26477.html","c3d7227dcc6f114218dfe3933019d6fb"],["/post/26671.html","828325221ffccceff80d0e51972a2867"],["/post/26737.html","41b9ff255c0bd9c9272f7038c6b3123b"],["/post/27045.html","2535d0cc77577765e773fb1a1751de8d"],["/post/27621.html","534a1eab984d85c25f5eb911f96d552d"],["/post/27890.html","6abc204bf441c09caea468908fb5b778"],["/post/27980.html","770b454c349c95cc86dfe274c356e682"],["/post/280b588e.html","795f57b49fd3a9ecf02f0640dc339cf8"],["/post/28579.html","c6d923266d9516fd2a8fe827b6f40234"],["/post/28877bf.html","ef55ae9a076584c1f7eef8654eafa36b"],["/post/28954.html","098039e5c6c46ebbe94511b451838e38"],["/post/29378.html","f3436978e6ba3ae672d4324d7e4329f5"],["/post/29949.html","2ba89260db68a8e2d44d4a30cd2c6504"],["/post/2ae43b86.html","c06820025a346c7fe4f2b5523a9640af"],["/post/2ba82a45.html","ad55920f3895b3263050ae401523a483"],["/post/30072.html","e5097ee8a47d5bc3565623f21c86be0e"],["/post/30479.html","5ece0bbcb84c27ae82384bf7820b1f32"],["/post/31a6b40.html","e51fb37e6c482000caf05dbf5b977b2c"],["/post/325cdbf2.html","cb9b035f622f9b16ff76ef3b3188b2e1"],["/post/3319ed9a.html","101c4b7776a0ad79dae80c97e711fde0"],["/post/3320.html","75053d4d969dcf4fdbd4d2cd53290c01"],["/post/33cb1151.html","8c42e3736d73f9fcc21022365835b641"],["/post/348d4e04.html","19fc66be404e9a0b2aa3650c56e9a1f7"],["/post/3526.html","f2be73192792a4d667a7c6070fad080a"],["/post/35532.html","18a01b546a839e849901b067c66a2a80"],["/post/35848.html","928d101bc5e3d36df655a99c2ce64406"],["/post/37318.html","70afd98a3d007d74180d7e48462f1b3c"],["/post/37663.html","941d9715469fb1de286b943fd75ce8b4"],["/post/38035.html","8f03e029e5518735912468546afab505"],["/post/38072.html","a2f2e84cbc275a4922289c59b54ddf36"],["/post/38145.html","c0dcaa14ca8f317a0a46fbd2b50f45c0"],["/post/39968.html","c65a95824d3c908ca949161ba998bfa9"],["/post/3de4bc69.html","6b9a957e014bb86633df09f1241287cf"],["/post/40583.html","5031663428c87ebdc54e2e68966f84ff"],["/post/40997091.html","bfaf56e78f5f2e00e0f452d6870caa96"],["/post/41129.html","f77b529788e4cf5db584eee39030ea9c"],["/post/41763.html","d560161aea6cb0dc6625d000d3e7a9d6"],["/post/41829.html","7d8afac26de106899476e9c0c00c95f4"],["/post/41840.html","f94508e4307fdc6a13909089e7fa0658"],["/post/43817.html","b8039c9ec2475e06b3548ec485fb7cb6"],["/post/43878.html","af3442a230388da998de381788bf8a28"],["/post/44250.html","4cc62b65fe0ba3d89be4adef47a087a5"],["/post/44336.html","2573a5bc79d7333240d1d0598c91b5c2"],["/post/44454.html","e3be692c5bda08d5741a7541e2980925"],["/post/44487.html","b226c08306fa4bdb5c691ce72850b985"],["/post/44914.html","b6224e475840061f75d9af24dcbb91a0"],["/post/4551c130.html","a8ea4d24167176fdbbd1fd34b3ef274e"],["/post/455a4c92.html","df303f814356b6b1aa01f6e3f3ce8e50"],["/post/46466.html","7bfb8120952b544810dd4f61f82258a9"],["/post/46925.html","ff603daa3698eef85aa1b6588472a508"],["/post/47075.html","bf3ece39ab97934f396d76c231ef70a9"],["/post/48220.html","2dbc8dedf0f33772c378ae8c7cbe7a70"],["/post/4b1879e3.html","6137f453ff9c06da22b28d5f5a22d748"],["/post/4c720881.html","4b7a7cd52cbefb4a5e707c56f9278a96"],["/post/50daec4.html","059fd188442c59b29f40e19a03ed0bb2"],["/post/51491.html","ce0e281f1c0f91b475d193e1bb481418"],["/post/52078.html","3ac090fbe43f7be31cc3a4b38209d8db"],["/post/53677394.html","57164e6247659c7f3ba3a6827422de03"],["/post/54300.html","72c1b71d150b1656868ffc827fd7010b"],["/post/54612.html","3db81b6afcc2207292a53c503aec9e4a"],["/post/54613.html","9280ea2dc31e885a1fa35a2666c7fbf6"],["/post/54708.html","aaa041a486fb34f40187e36f77c8b235"],["/post/54778.html","ab48573eee2eda3c5e8849ae925321e1"],["/post/5490.html","4b5e371c0992d252b34fc2e420a49820"],["/post/55046.html","ccc5f7f6607bdc3aa91fdf6856525912"],["/post/56929.html","ff7b508aab1fb2406aff8cb189647391"],["/post/57339.html","35d8c843697fc8b8f7e02df64ff3a942"],["/post/57449.html","60ec844b12090da03a3daed4421a22c0"],["/post/57453.html","cd07194c9c27fde2d1e85c9d6a06f586"],["/post/57671.html","4d6012358995850401124d49d6fea988"],["/post/58313.html","aec8e69b6b33456bea23763249818041"],["/post/58481.html","68edabeec0a1c86c65ad1b9213e51dcd"],["/post/58986.html","dc248bb3a5815ef0b3d4b30bada92e2f"],["/post/59431.html","63c5e49aa7bb650a5cab20e28cf8eaa4"],["/post/5951da65.html","3d74c1d9963b72c3c3c71d2efdda8375"],["/post/5be7e977.html","5c11f577b0e8da3d8e74bf5401fe643c"],["/post/5f9e4eff.html","065be0ca237f98ec25e3c1c6d2b8d954"],["/post/604b49d0.html","9f511e2fdb08e0d973efaf623d73ff9a"],["/post/61312.html","f80b4ca9be9bcaafd2062c46f11ffb15"],["/post/61738.html","d473c5cafcbfd3cb7b2b79501b84280f"],["/post/61809.html","ada4167d1c8f3be736da45941a5b3626"],["/post/61eaf19a.html","cadb1e22b9cbfa2b4b8574f9fbbd4e41"],["/post/63002.html","b578dd8cb8b37df5504a61ea54f7717f"],["/post/63711.html","341ff91c1582efa9748cb2d6f448c6f1"],["/post/6587.html","17b35c44a32262c5b89e9972d506ce53"],["/post/6589.html","643985636eb414ec19f4ab78c965996c"],["/post/6880.html","639d8e595537e57108af5085befb487d"],["/post/70263071.html","042d140834bce60604feb2b64ae86e8f"],["/post/71038564.html","153771df9df43d868ed9dd1e62ce041d"],["/post/7119.html","808cdb61b5b8d8b96285bb17dca59a64"],["/post/74e7fdff.html","e090527001e63f9dad8e5fa32e5deba4"],["/post/7502.html","d10558d133dfa9becc37ddc9c611b492"],["/post/7564.html","4d7014cf5e75f1f9a3408fd546db45e2"],["/post/766f9b60.html","751b02d60cbb62b72ea088ee9b892a55"],["/post/7ca31f7.html","2c98638431f739e353349808f7dd17e0"],["/post/7d1c86da.html","3236df2f369805cd77701bf4192c9679"],["/post/7f3bcd7f.html","67460555290eb96ed5e18f04d83b1a96"],["/post/8039.html","662c3550b361401839d7e0ca9ac6d7ff"],["/post/8050.html","f20cce9fc48d1c77c98ef5045ecbc0dd"],["/post/8072.html","65c345ec8f1a5264a329eebddd09b783"],["/post/8274.html","16329d09dddfd09d2764e8b6ceef2b67"],["/post/8372.html","66449d864302c038dfceb0643b604773"],["/post/8498.html","fb9c3b34e4ccfcc0e5b0cbb51f1c81ae"],["/post/85b4e13b.html","6e364d1735a0c5dd9df04e616131f342"],["/post/912b2566.html","095c991121a7cdf3aa7be5803365eef3"],["/post/9187.html","ffdaf4d9069ab41656386ba8b27e6d45"],["/post/9197.html","e2578c12508fb8cdf41c2c474a755c5b"],["/post/94ceb2fd.html","8d9be7e11be02219dfc2066bdc8a4e38"],["/post/95495db.html","da4564045e7cc50078ec0642406be98f"],["/post/97246020.html","649f30a49d17c20d6ef61c93bd82b830"],["/post/a3a786d6.html","70ffed6017ec3a9d0472b5c108468ef7"],["/post/a444b428.html","1059f69f09c48292be82a04565081f0b"],["/post/a50b8908.html","167a3dbe47d717123a21d61a2653b038"],["/post/aa1eade8.html","83805d33207c667ca46580cbaaf44613"],["/post/ade8c6d6.html","067b6be64d91d1fe3ed33840e06254ee"],["/post/ae8362df.html","c92c5a11754af634f1077a356b5cd373"],["/post/b4c1d206.html","51541228c9892ac39ab281089c72d42f"],["/post/d431fab4.html","abb05c5f058526a66a1045565bbb24d3"],["/post/d5381517.html","26234f51659496915587de97ec23905c"],["/post/e058ffd8.html","ba84049196a9b248e5fac4fb88a95ae4"],["/post/e0f8cb74.html","f59b945387d06c98a396ba11ca6657d9"],["/post/eefe591f.html","008a495a449016d0e659fd8597d7f7c3"],["/post/ef296a07.html","a18deba82ab018671f9836a69d8f20c2"],["/post/f201f9fd.html","dcd7eafd2997b0a169cc59013e8dd746"],["/post/f79e4123.html","5c6f12ca557f7368f261947683ed18c2"],["/post/f8648a1d.html","457a6798770ea2a57b5b6ac3817fd0d7"],["/post/f89cb603.html","4b525b6a6cb5592a9dd9d887bf35273a"],["/post/fa288682.html","4888afc42eb1d9f228433daca42457d5"],["/sw-register.js","9f94f9dd51f00e0992921b8d7fd38541"],["/tags/AT-T/index.html","3622b1b2aa166f1a8e2ba6bb97d3a934"],["/tags/index.html","c30658a42a8295b46b0c4234ace296af"],["/tags/动态规划/index.html","296bdd64ea7d90db0c65c14560f3f130"],["/tags/字符串/index.html","33ed806bcb0aa82d84ec89d4b9ed432e"],["/tags/字符常量/index.html","a544f13f1d833f019441df69c6ffab51"],["/tags/快排/index.html","1126fbf169c3d3871f8c4fce16d64955"],["/tags/排序/index.html","355b83ebc237ef9c3760a127ace8579a"]];
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
