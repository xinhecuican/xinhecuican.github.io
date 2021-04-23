/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","59258eeeaaf8a10561bca853474b696b"],["/archives/2019/index.html","5dc2c7590c87063f4463c363a03bcfcf"],["/archives/2020/01/index.html","5b98b0a7914eabcd5790e9e1d0c07ad9"],["/archives/2020/01/page/2/index.html","caf36ed8a7e8e989a1235d3382264a6c"],["/archives/2020/01/page/3/index.html","0155d5de3b54459e609a93a9d5f4a162"],["/archives/2020/01/page/4/index.html","d8e2a110efd451744bcc54dc3a5e6c1a"],["/archives/2020/01/page/5/index.html","ba56f7364f4450ecd64217250b5b3875"],["/archives/2020/01/page/6/index.html","071484ad50fd79c68b3daa71ba171d8e"],["/archives/2020/02/index.html","f7e85d1ab84b869e75d528c7b92fea02"],["/archives/2020/02/page/2/index.html","49c87eef6b1a63f7915c9d8dad4ba0fd"],["/archives/2020/02/page/3/index.html","ab2a1e617df99ea2702a288d0f344a38"],["/archives/2020/03/index.html","ac2a5dd1ddc5825eaeef48b6b13722e5"],["/archives/2020/03/page/2/index.html","12b47615c3eee2bbf247c7de2bb1b52e"],["/archives/2020/04/index.html","40060bb381c27ce340a595e8fb1c3d13"],["/archives/2020/04/page/2/index.html","7051c6c48e6c52c76403cd8917bce343"],["/archives/2020/05/index.html","9b9e9b883e5a9daa6a297352f6b4efb4"],["/archives/2020/05/page/2/index.html","f31dbc31c3591df91a5a2529fa2a2350"],["/archives/2020/06/index.html","3245d1ce9078265af9ad063e258c490b"],["/archives/2020/07/index.html","cea9157b14d563418e0dbb5e7a183347"],["/archives/2020/07/page/2/index.html","c175525a4d28b517baf41ceace895906"],["/archives/2020/08/index.html","12ce0715a076d9019e2f27101496a723"],["/archives/2020/10/index.html","1632258a151025b31eca0a0037b8892f"],["/archives/2020/11/index.html","1b6cc093458ee89547e179df8e568ae1"],["/archives/2020/12/index.html","9fb436f90ab469a63aadf7ce014821fe"],["/archives/2020/index.html","9152022486214d1b828c6177d1079a89"],["/archives/2020/page/10/index.html","28cede4143bfddef19113c9a47264803"],["/archives/2020/page/11/index.html","6be75726c5ed725e84d28c1b8fae2cc4"],["/archives/2020/page/12/index.html","d694f6e11b96d29debd2196e203d9084"],["/archives/2020/page/13/index.html","acfec8fff510a638b15cf549fe869467"],["/archives/2020/page/14/index.html","b840f0ec4cbea3cb35be8c03a5431c75"],["/archives/2020/page/15/index.html","746eb64896f2e97678260c0905b55002"],["/archives/2020/page/16/index.html","d6b9ca2406e60839cd22ba31d52bc471"],["/archives/2020/page/2/index.html","42adc4b7546a4e85bd4a5f8f4855a458"],["/archives/2020/page/3/index.html","f1d2c6670eb6f1ff29031322ae9cddcf"],["/archives/2020/page/4/index.html","2ec63c7916a548dba1b57ef476da7975"],["/archives/2020/page/5/index.html","ed09161b928ef1149d6ba32ffbd91fe8"],["/archives/2020/page/6/index.html","00371d5f90e4ec768aeddc18b0472df0"],["/archives/2020/page/7/index.html","3792521d590d13ba261a360ba6f65ad4"],["/archives/2020/page/8/index.html","57f9ea55cfeb97008141ac37455c0e2f"],["/archives/2020/page/9/index.html","a704250874b3c47f71ea9483f0b10e14"],["/archives/2021/01/index.html","8768cb5ea91552b976f0fc57d32d0ff3"],["/archives/2021/02/index.html","027832e0f588368adb12bb56e7f87040"],["/archives/2021/03/index.html","ac09ea8af51d2da117f2e98adb3aa0d7"],["/archives/2021/04/index.html","3e9eff91821b99e4d89200e4be8e4626"],["/archives/2021/index.html","03ea037a7540a3c4d8cd5b04abe66bc4"],["/archives/2021/page/2/index.html","6bf58c3db6aa6941e5f61dd08b0647aa"],["/archives/2021/page/3/index.html","7f39bd30e8be62159e18d3c6dec0c2b9"],["/archives/index.html","535389e6ac6745307f239d48728bf28e"],["/archives/page/10/index.html","2720f2117d28c3425b71ab9977966376"],["/archives/page/11/index.html","75d14e77e1ab708d4ccbe87c0fb14326"],["/archives/page/12/index.html","62a96696cdf8bc9084fe223e41c75457"],["/archives/page/13/index.html","81e367d63dc580878468c8cc24a6ecf0"],["/archives/page/14/index.html","8d0332647e49e576e3ad91872478fb41"],["/archives/page/15/index.html","c62dd7a2d39d74b0f7642a8ae87d2c80"],["/archives/page/16/index.html","7fa3447fd41df908f544d53d59799e1d"],["/archives/page/17/index.html","dbf055f702c2ee47a0761fc5269257ed"],["/archives/page/18/index.html","8d829a5c3329b5c7676e083017c3a57f"],["/archives/page/19/index.html","5101db7f3d7eb0c132002c11b404da6a"],["/archives/page/2/index.html","c8d2d8da732fc60bb631e80915582cd8"],["/archives/page/3/index.html","d4f0332f95c8214e2f9f3797ca2f63ad"],["/archives/page/4/index.html","7083720b808b745892735fd1aa0da7c0"],["/archives/page/5/index.html","67665b291c41cc0b9fb40846e207fb02"],["/archives/page/6/index.html","87038d840d8669a599b13aea8bd0ea5f"],["/archives/page/7/index.html","618162b6531df346ee4f2fb6f9b4d90b"],["/archives/page/8/index.html","69ce3dfb6016d548dc88c2ac4379a792"],["/archives/page/9/index.html","abd2652cd1cee36d444ac246d29a396e"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","aecaa9d3c528360ed109a2ab39f70870"],["/categories/Linux/page/2/index.html","e28c329dc86800d44a1aa61ddb97a428"],["/categories/Python/index.html","2d5b930e8fdb488b5f6eeb4af5b75f02"],["/categories/Unity/index.html","bf4e4100ee0a785409f36398e3efa8ca"],["/categories/c/index.html","f77adef8edd27d1ceef37ba60254f6bd"],["/categories/html/index.html","86149f29d62b38572dce56016dc816a6"],["/categories/index.html","089e6b17d2c6c72405c4ed250dbe851d"],["/categories/java/index.html","0a9fc893b94eec2c615a33a16f35628b"],["/categories/java/page/2/index.html","08de2981fe9ffc356247e8356dc59b28"],["/categories/java/page/3/index.html","712a291db942d9816b2cb1105b8af11f"],["/categories/js/index.html","795b06989794e5834d108ffbc8793b57"],["/categories/next/index.html","9c707abe53f8d29a999ee06b5759c1b8"],["/categories/stl/index.html","b3a9b1ecacdc953161e9b3c70fe624df"],["/categories/windows/index.html","7982f96aeca61e991205aa4d388ea257"],["/categories/基础/c/index.html","410ad6213c1fbd3e7f45f6abe5df1104"],["/categories/基础/index.html","f5e15b7e662fc6a0a425bca66a57a63d"],["/categories/基础/page/2/index.html","6d5837770be1a556f4c53aa967edbd57"],["/categories/并行/index.html","bcc7c0650e588bc52738f74efcfbabdb"],["/categories/数学/index.html","6b9af1e14e8dcbc4f21f9617efc62e08"],["/categories/数学/概率论/index.html","bf72f3ed35e13755bef36801ff38e7e5"],["/categories/数据库/MySQL/index.html","df10c5e4310c565c03c8427abda11e30"],["/categories/数据库/index.html","dded6e81fb25c26ce887fbd6442c2b52"],["/categories/数据结构/index.html","fd4a9bda654596a4cac92489bf9d59f1"],["/categories/数据结构/算法/index.html","fdc57e55577382297543fdf1f68ec5ed"],["/categories/机器学习/index.html","5c9c61328adcf7cb0361418b6a6708e5"],["/categories/杂项/index.html","5912c57200ab435945f325bc41f2d9df"],["/categories/汇编/AT-T/index.html","d2a4d95cb8a5765db7a26f9b10d515ce"],["/categories/汇编/index.html","b1edc9658c8ba3c396d1257e35e563e1"],["/categories/汇编/page/2/index.html","558f0db234dc232e464646665b023750"],["/categories/汇编/page/3/index.html","8141d8acd7638f09db1ac55df597385e"],["/categories/算法/index.html","0f4be45967178bf3e44229855fcce683"],["/categories/算法/page/2/index.html","30ea3678ee49911134deb38b4a78d5dd"],["/categories/算法/page/3/index.html","4d3be8e031bbf9128ed67437dd0d0160"],["/categories/网络/index.html","6261af9e5c918e182e6c0e3a372a661a"],["/categories/计算机系统基础/index.html","484c024c2e5d86ebf01487b0c19ca17b"],["/categories/计算机系统基础/page/2/index.html","4e9b480b2f51ceebda2710ff35ad815a"],["/categories/逆向/index.html","b45972e1fa3f3f6795cdddd8569f8c87"],["/categories/逻辑电路/index.html","950df9a9d91d3a2fdeb97b3a6ff01cfe"],["/css/background.css","3ce8b52157bd531ee3427642486cfc6a"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Snell-Roundhand字体.ttf","2ec54ef3411fd027522c5f1b8b6fe726"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b0659f3c37e622851e7f3d276bcb301c"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","b73645a663390942425ae425b24756bb"],["/page/11/index.html","d01e18dc30ee450e797149fff7831a40"],["/page/12/index.html","c1b9b92948c9f5c6ddf23b6f0f7ceef4"],["/page/13/index.html","2669aa5b1e6f0f54d8014278759b3f11"],["/page/14/index.html","13945ad42098978ba1a98be2cdeb9113"],["/page/15/index.html","3fb9ac048b90dd8d74ef4c4f312f6deb"],["/page/16/index.html","10db51d3296c9ca735aee3533517dda1"],["/page/17/index.html","1fcef8909058f1695a8c162a5d032674"],["/page/18/index.html","1af8d074ea5d525b014d2258e99d25aa"],["/page/19/index.html","acffb9bf182421067a0d48c3bfff6901"],["/page/2/index.html","e1dcd15841053034c681a5d006dae42e"],["/page/3/index.html","3548d09c02032c1ddbf9d401e751e745"],["/page/4/index.html","74fbe9fcb268276cfae7eb063975badd"],["/page/5/index.html","8c259cd703aae9cfb34e5f5fea6c4230"],["/page/6/index.html","6b53b06ef546c89939ae62c6a2ba9a14"],["/page/7/index.html","ec9d57577502551c6a3bb1d5fac1c9bf"],["/page/8/index.html","2f4b9540cc7f8199ee328072e07227e8"],["/page/9/index.html","5c7a7825681f4712ec10ee82ed553217"],["/post/10919.html","54d37bd0afe1975f3bc4551842cc8272"],["/post/11051.html","11caf2b050692b5a73bcc27d2655eccc"],["/post/11306.html","d2999d77eab515bb37f5d88f551cffcc"],["/post/11491.html","ee8336d53729d4962d6ab8003123e07b"],["/post/11799.html","ea972bcbce9f52e6eb8f67c5d3645bf0"],["/post/12334.html","c599f0fdaadb3a1aa66019761a68d5b4"],["/post/1326.html","56a4683b3ade5748a6036c862487ceb1"],["/post/14379.html","cb07476b2df59bac6c4f7621db29c155"],["/post/14511.html","ced8917620a2ee9c2cf16e145231251a"],["/post/15201.html","f9139477a31b584a06d6387ba47b5e82"],["/post/15425.html","aa6a6572acf06f7be3fcd471bdb107fd"],["/post/16107.html","6654be0ecea92949710fd38b120b5aa2"],["/post/16e2846c.html","9c8d49d8b4292b23e25ad478ee6dd9d9"],["/post/17862176.html","9330b963b6fb38582ab7073c71e1c439"],["/post/17ad67a8.html","b6ce3b038b0a24e32e504e98e8d7a8ef"],["/post/18431.html","2503b6a819acd5f5568d846e6fc2a2e4"],["/post/18912.html","e2d2f68a984e823ffbd3b0f48f27014d"],["/post/1b9c8662.html","830445290f56a01d04baeb0f69892bed"],["/post/20198.html","717ab7c465952c13a12145c21d617df2"],["/post/20ff5ccb.html","7e10cb593aa43a5cbd87b7c4df6e2317"],["/post/21624.html","a83b4dd2d39a3644629571aafd07a47b"],["/post/2170659a.html","346905e6e1d4c2c309680047cba2c43a"],["/post/22102.html","aa1a88d12d7a239be78a3bbf4618c840"],["/post/22493.html","cad7588b3eee1a0e1cd08e96b0b70754"],["/post/235252ea.html","f5c04fb91499f23ff5cae01209e464e1"],["/post/25699.html","b39f2b4efb9c84909857b03c7f92a54e"],["/post/2647.html","c1cbece3d8a69e2140ab099720ecbe7e"],["/post/26477.html","d42ab6bb318dec8c3717367d782465de"],["/post/26671.html","8258deb98547f65e6f7e4beadeebd976"],["/post/26737.html","6ce276f0d19cb53eac2559b93922fae0"],["/post/27045.html","0d0fb985fb5998f82ffb3b5f6eccc21f"],["/post/27621.html","9a51ad8d202c88e34921ab9beb7f3213"],["/post/27890.html","19ab0e83bb4974bd604acf9a63e45401"],["/post/27980.html","b26890fe9a0619974f7a7d7d80e85ba5"],["/post/280b588e.html","3eca20e6e72f0b54a006f9263d168793"],["/post/28579.html","c17d3584d73c12d8bdde63b4a85c4343"],["/post/28877bf.html","007724d3390489868be5739ced71359e"],["/post/28954.html","fae78ce6b8cc975c794d82e402a7de11"],["/post/29378.html","e59c77c3bd2b8ba671987ec1fb3d767b"],["/post/29949.html","4ef89543235c5aa47c78cfb493a417bf"],["/post/2ae43b86.html","8a905dabb814358dffcf88619f2b4fbc"],["/post/2ba82a45.html","de40376a4428c14136ab8a7dc6891a10"],["/post/2cad8b04.html","e74b0e6212625407b51f85d95324fbe9"],["/post/30072.html","97e7d7a67ad92ed0e99edac329d6578c"],["/post/30479.html","db36067d7b2d666cee8f3c37a529922e"],["/post/30a5dc7e.html","fd500de75787428656f55b1ec05761b2"],["/post/31a6b40.html","ec41e654aa56c4fd118fe39e4a1421df"],["/post/325cdbf2.html","ee1aaeb90f66cfc0d177d2fffe8b5e0e"],["/post/3319ed9a.html","429bb51386f345eaa1229c335285cb57"],["/post/3320.html","ba6b0dd5e5e0f2008a667dc5ee4dd5c5"],["/post/33cb1151.html","efdcf7d615be38f2b87a06751f5ea5dd"],["/post/34811d5f.html","5368d9d97a1937696e99fe5c14207dad"],["/post/348d4e04.html","2bbea9e10374987e14cd3457e0270636"],["/post/3526.html","c1726d617267e77f36304735210b22c5"],["/post/35532.html","d9c71dada866c3eb149b166b43b9f9e2"],["/post/35848.html","90dc5b7a899679dd1b84d03fb5763986"],["/post/37318.html","b2ee98c90bc2f576c9d98c9cb64c1f0a"],["/post/37663.html","7cc237bf94707a5bd8e5af1d02a01584"],["/post/38035.html","4d5d8e299330272ee84bea108acb63f8"],["/post/38072.html","76598bd6363e15256768605e53e2f89a"],["/post/38145.html","cda8dcc6a1c729549d0d11f9930e6bae"],["/post/39968.html","531d227d81797424ee69968a4d236878"],["/post/3de4bc69.html","1e884457b56289ae6028c899f838811d"],["/post/40583.html","4cfba51dd93baeeefe21b021ee26e742"],["/post/40997091.html","3d73994883e4181ad82d125725b28cb4"],["/post/41129.html","710397b0b0d20ff6d1f6822203b3c37b"],["/post/41763.html","7c576a59c6dd8e7997803eeba934c0ab"],["/post/41829.html","53e47e904db906ded2af9ee1bc3f44c5"],["/post/41840.html","1f2933490001319f3d6ac8b1b9fce597"],["/post/41e39f2b.html","aa69999555ecfb636b6103edbf739f85"],["/post/43003.html","565ca445a2df4c2707c44d6635527e5c"],["/post/43817.html","50c001f123ad61709c4f3668d74eb88f"],["/post/43878.html","e28fd5d1329207bd80e61f04abc7ec38"],["/post/44250.html","9e052d7130351c75519ac346541d135d"],["/post/44336.html","0d3ffee69b00e1467ac59e9feeedd391"],["/post/44454.html","751c44965d41293460deac8e85eeeb81"],["/post/44487.html","a013b76a935cc902b303b72f17f44768"],["/post/44914.html","242a39c463035291d50c72107f8fdb02"],["/post/4551c130.html","9cfd367597fc530007a4f37b9bc6fc36"],["/post/455a4c92.html","070bfc5f84f63318701bb7820edb35fb"],["/post/46390b34.html","3de5a31512e06584d2690e912d2cb0e8"],["/post/46466.html","312047cee4c8f6df7ae80a0cdab86101"],["/post/46925.html","b8e6f5cc45dc78de025ea3481afcfb65"],["/post/47075.html","f4185b137732a4856f8b555ce162aae9"],["/post/48220.html","d92b61f5edc7939ea340f4e8b929d001"],["/post/4b1879e3.html","dd5e116b6e800435f9ab1b58038a89c9"],["/post/4c720881.html","022c9552aad4c56076c7de135e75947d"],["/post/4f4fc0a1.html","d17c6281608d5ad3ded698dfb6e874c9"],["/post/50daec4.html","54fad3cf581b482f1dddc68ef9ffa290"],["/post/51491.html","d79f6130e79d1612a6a0d8d3013f62f9"],["/post/51e63dcf.html","61cfea8c8d3840f2c0f1e7cdda8fac02"],["/post/52078.html","aa6f2869e91711c5207850955829ed05"],["/post/53677394.html","83029ca8e1ca992b4545f29461073c95"],["/post/54300.html","6a03a98c272fab4647263931cabedb0f"],["/post/54612.html","a85a706677da8210e1f29bcb1036d207"],["/post/54613.html","b21b020aa9a5928e543c98dcf3ffe7ee"],["/post/54708.html","e214b0764dfc5fbfa1efbbacb3f91f8e"],["/post/54778.html","65ca63dbb40d64c89f53c0c31c0f5982"],["/post/5490.html","b898aec4c3f2c5058cc2f34f21858c5b"],["/post/55046.html","57c2bc8c784aeec176db1bd89441fee2"],["/post/56929.html","e10cafbe2a1d873375d2884ff4bc23b7"],["/post/57339.html","960c1410c8754ec25f8690631da4f4de"],["/post/57449.html","03bb1a4d54f401b81dde236a7cf08620"],["/post/57453.html","bf90f89684c499bb0c4a50a14e9c65ba"],["/post/57671.html","8ed4a6c8b0f6a4c63d3148f2ca263932"],["/post/58313.html","dda5eea122f55ae4d0a1f3113dde759e"],["/post/58481.html","cd189a7a17dfc7bf3635a9170684d50b"],["/post/58986.html","2018f93fa7a76fc6b7ab78ad1ecd89e0"],["/post/59431.html","31ffe734a28bfc6dac00842a91c82eac"],["/post/5951da65.html","dde0d997bdea861ab230a8719173c788"],["/post/5be7e977.html","f4f796643cd3ece11ab8219063e28632"],["/post/5f9e4eff.html","4eb51809bb32a2aebf5603307e3746a1"],["/post/604b49d0.html","b16aaf70e9519166d2bd92b91385f315"],["/post/61312.html","d3a629c549a0baa5b37faba74476cfb3"],["/post/61738.html","7cf7fe17308fe290d8f32d3b79e97154"],["/post/61809.html","8a294806bf971bed0ee48f7348b7ace9"],["/post/61eaf19a.html","eee626f7df5fb4b6fc5f44147a9d3f87"],["/post/63002.html","0c54ef80bd2b35b44d5924b338c83e27"],["/post/63711.html","bcf0c729548bee3159680ada74dbe0ac"],["/post/6587.html","bb13c259591c20225f4944517b64927f"],["/post/6589.html","43d18ed0c12036955e7bfb102f6751bc"],["/post/67454659.html","5aa968f338b868aa8131d121a607d32c"],["/post/6880.html","2d7a7040169a68674ef29d41db55ad8f"],["/post/6ee50502.html","deb137786186454a39c7496acd86fe55"],["/post/70263071.html","c939352290d8bc024099401d9ae17856"],["/post/70d4f4af.html","8a065c6bac2cee7d40068fa12cc03b09"],["/post/71038564.html","f45f8a0ed430defd8e3a8f2ef09ef116"],["/post/7119.html","8ad2830cfc8074c38aac7e75086ad36f"],["/post/74e7fdff.html","ad71f1407e558d3e7c3d5b951e9648e6"],["/post/7502.html","da13baabdd3a8ce89c05214c31d8629d"],["/post/75223936.html","745af2f4a4368557f11749f49b8be8d1"],["/post/7564.html","3da884a57e82e8f8ddadcd84383df93a"],["/post/766f9b60.html","cf78fc95cf0ca597dec85edca34e127a"],["/post/769365ef.html","2b5d18c94b515b4c7e379981e563676a"],["/post/7ca31f7.html","0b12ff0cd9b040677853f7fa0382937f"],["/post/7d1c86da.html","50eaa2e3c6b6c89e23da4e7a930460ba"],["/post/7f3bcd7f.html","7b816230897cc43f57e3db336b6b91ee"],["/post/8039.html","a93e279fca40d171d3d1ac08de79ede5"],["/post/8050.html","04d8af63308f658b215869e980f9927b"],["/post/8072.html","fcc0d1bbb6e2900f9434bc2f8e70b7e0"],["/post/8274.html","d44a380b2f2267ee9fea7ee6edf9e2b6"],["/post/8372.html","0a34d0cfd6d67070198d0ead403c16a4"],["/post/8498.html","20eb47e2c6e96cc41fbcf89d828b8aae"],["/post/84ea90f7.html","7520697c6578d6330e9d11362c52377b"],["/post/85b4e13b.html","8a1ae57e585a5528341b4b6000fbe3d2"],["/post/8e75958d.html","082fcf8cb4131a8a0bca4a3352fe967f"],["/post/912b2566.html","cfe8f74d8c027ce15523d85cddc2a9c7"],["/post/9187.html","83b4e0709b817c2b7292535f0f420533"],["/post/9197.html","97245f89fa28c1ee9f0ff6bb62630373"],["/post/94ceb2fd.html","14a51ceeb3d3561ad5cc95aa9addab27"],["/post/95495db.html","0ac08676a59006e32c5cc5116bc380f3"],["/post/97246020.html","3311ea01a6722ebbdd07f920524e46ae"],["/post/9954ba8e.html","b10e602825ea69fb28733b489174de90"],["/post/9d855db5.html","3db17e5591e897ec56ee5834a0c8e1a7"],["/post/a3a786d6.html","fc0052cb08f8905f9ccd3103a41f5e66"],["/post/a444b428.html","a809af8e5543537831b53573385d6ff2"],["/post/a50b8908.html","efc6c62e15f2edd4357034aab9967f23"],["/post/aa1eade8.html","8e0f6e4fff216d9a4fa523c04c9182e1"],["/post/ade8c6d6.html","dd24fadad48be3bc55256929ee1f32a3"],["/post/ae8362df.html","03f54a3bcb94ba829d7d79403c8cac03"],["/post/af3eed3c.html","215d8e473af59c6b314c599bc5ab266f"],["/post/b4c1d206.html","de1e3bab36d2636cd5d5741992756522"],["/post/b75632a1.html","05b29e8bdc933f873a6dded920f39768"],["/post/bb25e9a9.html","0b73ddb8da4e78e8ca30c9c0e6b43283"],["/post/bcc68732.html","3fa88b8100357f4c131a08ab9d95f4c5"],["/post/bcf345af.html","6c16cf3a11efd29bd0dab3d7cfdb350c"],["/post/bd608ff7.html","2d9a1df36d497a1538abb1bffac04418"],["/post/c82a1c99.html","886a76236125c96805aadbdb10f43959"],["/post/d213fc7f.html","ea8121fdf8e121a2b1ede8d4594646f7"],["/post/d431fab4.html","7b2b7953e146f193bca2f1b56bb415c2"],["/post/d5381517.html","1693b6c98f3d2f0583d00dedb2f30404"],["/post/d94f88de.html","4e812322d1ba00c82afc9bd69f5ada93"],["/post/e058ffd8.html","09bc81bbbaae9f69ae7f36f916a7e84e"],["/post/e0f8cb74.html","5921277c4423c61633b2018af34a40f8"],["/post/eefe591f.html","a82368c8db0cf30ce5cc684d7c235358"],["/post/ef296a07.html","dd73c72093551216ceb2b9bd1bca1e98"],["/post/ef3a3fcc.html","6b7d5424538e27fc12237f1167d16023"],["/post/f201f9fd.html","35fe848fc0d7e4ddfc4d99550bdf331f"],["/post/f79e4123.html","fc1ed0865029dc16f248f3a5bcda605d"],["/post/f8648a1d.html","0e5e39be7039fb5df2cc71314f713725"],["/post/f89cb603.html","c304c11d33b5afbb3f27ac322685bccf"],["/post/fa288682.html","905ae8ea69a0be63a1a1ca6b12eb369b"],["/post/fb98053e.html","f92ac6a5c25357fcbecaccdad248474c"],["/sw-register.js","159e410ec35a8642defa8231c1a5d155"],["/tags/AT-T/index.html","0d198a8aac036d9b0105ded5952085f8"],["/tags/index.html","555620033156af489997a8280662711b"],["/tags/动态规划/index.html","f977aa590692bd70d7969f32f5a332c4"],["/tags/字符串/index.html","f019a3c471ba8c103a74ed4279f45327"],["/tags/字符常量/index.html","2eca90881f7ce0e1ca79af2fe43397a2"],["/tags/快排/index.html","9477c8ce36f498f9cb9d994d9eeb527d"],["/tags/排序/index.html","b2190f79f9ac6e2f4f69795193ceea89"]];
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
