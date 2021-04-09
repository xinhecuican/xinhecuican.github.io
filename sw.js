/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","9e47187e5a6add148c7f660795cd6c21"],["/archives/2019/index.html","2d8ff54015766420d2330365a1c058be"],["/archives/2020/01/index.html","a5db99300ae3ef58aa8f91b17d255995"],["/archives/2020/01/page/2/index.html","d26303e6fca112d13b8a84b02175e107"],["/archives/2020/01/page/3/index.html","5911ad974b061d1d6e20de43134521b3"],["/archives/2020/01/page/4/index.html","0d871afcd47754ba1aa8d7a2353f7099"],["/archives/2020/01/page/5/index.html","383433b08cebfcbebe00ec1d60a08cfd"],["/archives/2020/01/page/6/index.html","4a66076793fd39a884dd1b89d69c6c9c"],["/archives/2020/02/index.html","4bbfe594a92facdce93ce8cb42d032ce"],["/archives/2020/02/page/2/index.html","f7207ec881a0ba4c04c5432333357e8e"],["/archives/2020/02/page/3/index.html","90f3dbf69b33c639b17689b8835f2dac"],["/archives/2020/03/index.html","7241586b24446abd65ce7204cafc6c76"],["/archives/2020/03/page/2/index.html","e87df6c527a2a20950b464ab0b7baa9f"],["/archives/2020/04/index.html","a01f90a8e196bfc80e034aa8133c9c5a"],["/archives/2020/04/page/2/index.html","c10c4e2725b865a3b265beb74f8a9f2a"],["/archives/2020/05/index.html","19cb617e9a462ad4c1b57f45e746f3ce"],["/archives/2020/05/page/2/index.html","347ef19fe45a1e9cb91f17b157ec0829"],["/archives/2020/06/index.html","d11583548091dea3a327db4bf984db93"],["/archives/2020/07/index.html","aa3f4c3b76f13d0ea0837df1c1ee523d"],["/archives/2020/07/page/2/index.html","ac0e44840e6680a712d15a1e375e3019"],["/archives/2020/08/index.html","0c0c5e332d0ee399f2d3c47da6f3019f"],["/archives/2020/10/index.html","e76b4222f00cb67ef9310f90238089b4"],["/archives/2020/11/index.html","b3ad09c80791acd02b021ef1827d5d8a"],["/archives/2020/12/index.html","0940be88e8bb6dc00a2e0ca7c68d902f"],["/archives/2020/index.html","37efd934ec3b34a10b84d69882783f78"],["/archives/2020/page/10/index.html","ab3bbbca73ca0a76b6cff6a03b7b1863"],["/archives/2020/page/11/index.html","5481f7fef8205b219a01e77acf06612e"],["/archives/2020/page/12/index.html","e4ea69e60e2ddaadf53814b49b38df30"],["/archives/2020/page/13/index.html","cbfc26df06d7eb6fae6b489f24ea64d4"],["/archives/2020/page/14/index.html","55478e409cf057afd500284e4930534f"],["/archives/2020/page/15/index.html","1522e6d49832a43baf1535844903367d"],["/archives/2020/page/16/index.html","29f16936e01d172dd9715cf216efc38a"],["/archives/2020/page/2/index.html","7dd93a8a8a78f2b39096c73e6b1c2768"],["/archives/2020/page/3/index.html","7c8068cacc15b57256d647a7a85cd68b"],["/archives/2020/page/4/index.html","a1b3edd4d55c4b4030484d028ddae516"],["/archives/2020/page/5/index.html","554723fd656b8ef64074e16868c4e831"],["/archives/2020/page/6/index.html","ac4bf0418463fd87d6c7fbf8588fe575"],["/archives/2020/page/7/index.html","1a30eaae4b09f74f2dc78281a2da31d2"],["/archives/2020/page/8/index.html","c7cd3516101ef907e75f8c4bbd46048e"],["/archives/2020/page/9/index.html","d82271fb08ff9ad82929d13684921937"],["/archives/2021/01/index.html","44975c9188ccd2000f23156afa1f57c7"],["/archives/2021/02/index.html","c9f831f1ae43e4eafea1b8d9260e2c0b"],["/archives/2021/03/index.html","2ee632aabf456ec28b66ecd25e0adbda"],["/archives/2021/04/index.html","8226141c591a9129cf7b1ec6006c5adb"],["/archives/2021/index.html","af99decb422615f25cb8af06ffb5b610"],["/archives/2021/page/2/index.html","a75b5f6f31290cc2ebe08b43afc619e3"],["/archives/index.html","2088b18063e8db5740cc7b6795461df8"],["/archives/page/10/index.html","446e20a6e0668d06be5869dfcee78ae5"],["/archives/page/11/index.html","c5b8e1d46daa8730c96cb2d96aa3238a"],["/archives/page/12/index.html","170fcbbf6b1cc1f4d31f26cc4f106208"],["/archives/page/13/index.html","6b3d94c7eb3917385e9eef0c1859bcda"],["/archives/page/14/index.html","93af014b9367b71f5af460ccf3ee275d"],["/archives/page/15/index.html","1f9f712c16342cdf9279ecce00e50240"],["/archives/page/16/index.html","2a45f45370d5bcb7d5136db6663d55c4"],["/archives/page/17/index.html","b97ec9968cd070089caebc3a619211d5"],["/archives/page/18/index.html","672f10f0408dbdb1c2b4523001f7ccee"],["/archives/page/2/index.html","ec25aea491753c69ddfc6fd03b2993d2"],["/archives/page/3/index.html","47082adb012f63f0363d540dde1ced38"],["/archives/page/4/index.html","996f94112cc1ca176a7b34960f73ae84"],["/archives/page/5/index.html","5cd2a8318b1cb63131c0af523318c27b"],["/archives/page/6/index.html","16261660bdfe9020bed8f10e3c44bd01"],["/archives/page/7/index.html","76a9fc66b372d776fa8f1b643e30d1f2"],["/archives/page/8/index.html","5ed4d1256dfbb980bd5e3219263e2ab5"],["/archives/page/9/index.html","c44d081484565706310d8457bb57041b"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","617c575f75cc748f3a82a7561c041b95"],["/categories/Linux/page/2/index.html","e7d12e73d5ffa1c17e66450a2801b8bf"],["/categories/Python/index.html","60aa210262a4ff8bed6b256c683dbb47"],["/categories/c/index.html","1b7450423561e9567ee7ff18d6448008"],["/categories/index.html","03d2dc04216f0b18e8a1c5ebd8d5e599"],["/categories/java/index.html","1cc227b3d9c28bc5ab2defd7f41f7d90"],["/categories/java/page/2/index.html","0915b5ffb09d234e0311a540a7c27a15"],["/categories/java/page/3/index.html","6eff789f9d089b0f59cf6dc2f88b0aaa"],["/categories/js/index.html","0ad12537c56e7b316b0d28b9a81ca12c"],["/categories/next/index.html","6ae56671aef8d6f1410ce0e3ef30b7c8"],["/categories/stl/index.html","fe11b7cbbe5c48d8818bffb36a707fa8"],["/categories/windows/index.html","e79e60323f53a7f29280394d66dd061d"],["/categories/基础/c/index.html","0e2520b4bf4635913236a34a0bc1bf56"],["/categories/基础/index.html","9da35bb73e5c8d8be59048a6428997f8"],["/categories/基础/page/2/index.html","8bcfbafd792df748382dbbc68f43d3ff"],["/categories/并行/index.html","deaad537e058d4be8d77260643f96cb7"],["/categories/数学/index.html","531dc7ed4293fba91ccc731fa46a3b0e"],["/categories/数学/概率论/index.html","fdd1d641dd5dafb65739e3a2fbe929fc"],["/categories/数据库/MySQL/index.html","4f9f569a644f077d611645daa8b5e056"],["/categories/数据库/index.html","8da51cf2a699a6c474b450613b7c6d1d"],["/categories/数据结构/index.html","06fe8d23cfd6097f82b19edd8b28a404"],["/categories/数据结构/算法/index.html","42f78f97077ff9a149de219aba57f3f6"],["/categories/机器学习/index.html","599e52c1cd3d4a3f64ab6b4b151fea24"],["/categories/杂项/index.html","87fc460c65ef14c7a1b7b4991cc872a2"],["/categories/汇编/AT-T/index.html","4f0888c2d42ac0d1ade8ee385ca71283"],["/categories/汇编/index.html","dcbd67def74d46964ed3ddbdb8510b2d"],["/categories/汇编/page/2/index.html","27982188c841abc0baf623318c54e103"],["/categories/汇编/page/3/index.html","29c1bfd826abb49a5790f9ce9f738847"],["/categories/算法/index.html","5b51b7abc6f2e9e5a03950caeba0f403"],["/categories/算法/page/2/index.html","336c4f1881b96e9b4da9ef7ffab94090"],["/categories/算法/page/3/index.html","237dfc90b463e5675d3b9e5f283f9456"],["/categories/网络/index.html","a85de84fa718d60c2d0cfceb2e00977b"],["/categories/计算机系统基础/index.html","d407d00dceae0f09dd1b302dc9c69565"],["/categories/计算机系统基础/page/2/index.html","ddf79407720b1121d07c76a984c87260"],["/categories/逆向/index.html","ef50bae90e4aa07edf4006fbc9a5230f"],["/categories/逻辑电路/index.html","495b52689d9b8f6f12542a083b873ac9"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","143cc9e5e9effecf437f0849d1139a55"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","755e96bf917322ca80062f237cc82d11"],["/page/11/index.html","a05a9bb4cdc6d961bda172f7145aae68"],["/page/12/index.html","75cbf2f31f98de7059e0bf9bfbe7cbf8"],["/page/13/index.html","f2892d5129c4d2d6e2e9ea7aa9b1746f"],["/page/14/index.html","c735a1341ff5a8b47e90099ec8b4e890"],["/page/15/index.html","e1b8fa68478030e177fbfcd4e44da65f"],["/page/16/index.html","04809d4a604670559bb5e0741e4fb7a1"],["/page/17/index.html","91eeb20d559d4f7a70e5edf7bb3a1f2f"],["/page/18/index.html","29f8ef7d354cbd9e47d49ed96064e1c6"],["/page/2/index.html","2e5e724fc471ca349fb8e9b910eb9c38"],["/page/3/index.html","eeb7e8efe0498ea7962fbbb8196bf70d"],["/page/4/index.html","b88ed0e0feded2cd14f3414876f271f8"],["/page/5/index.html","c52adeeca489bbc0f9bdea3057089533"],["/page/6/index.html","73e10f1f66170b13ee0f80bf2b854fa3"],["/page/7/index.html","5db6376c3cdbf693185b0b672dcb8e56"],["/page/8/index.html","a791830696622e47016f34a37a1f0e81"],["/page/9/index.html","abe2b43ad3f4b2799f143d0611ccc2a3"],["/post/10919.html","e0cba7ba8c920abda41b9bc9b3a15b2a"],["/post/11051.html","6af7872cd6027abf73766d7e97101eb1"],["/post/11306.html","f1ce487d636ee41ee549011357643754"],["/post/11491.html","d7c0e605e35cb415e359a08b9f6af52e"],["/post/11799.html","b68c36c68fd903f02c49586c6b54e0a5"],["/post/12334.html","bf69eb2caf0bbb8673951a68f2da104b"],["/post/1326.html","f577220c8158276617199853d3e437e5"],["/post/14379.html","d0b9b4953da52b1a38a0dbbe803a1467"],["/post/14511.html","2c07460396387bc1f8aa11e48e9f63fb"],["/post/15201.html","1a4b1db08d8b077c4e00d52e2614479e"],["/post/15425.html","3826a9e374dd630d36f9e77ad38d870d"],["/post/16107.html","e16a797f1f5c2c662d77aa3f82f78fe7"],["/post/16e2846c.html","063e968af769ea4cf1fe46bf9b55cad9"],["/post/17862176.html","eb587dcbb0f8d9a0331378eb6d98c98c"],["/post/18431.html","3d863f5c23f6c1d5503bf5403bb16f06"],["/post/18912.html","2ec193ad5f77d1945b8b9e49ebf0dca5"],["/post/1b9c8662.html","30b4f7f569196f39abeb6e5b9825481e"],["/post/20198.html","f6d06ebf58751c38dca95c146bff2651"],["/post/20ff5ccb.html","dbec8a932cc76241de42fe100bf4ff00"],["/post/21624.html","44f443aa8e4b03f98fbdd33315f4ff60"],["/post/2170659a.html","329213f31c2aa0127750f7bbb7a8407d"],["/post/22102.html","f266e01f5cc5abebdb492d14b4d10adc"],["/post/22493.html","ad46aa8ac6ef06899b647a30d8885ea3"],["/post/235252ea.html","d97973f27eb1e8a70f34a326efc10b95"],["/post/25699.html","8c1830b7a8243601704c922534c142b0"],["/post/2647.html","8ae1f806cafcd8786ed242b68747fefc"],["/post/26477.html","43d026ed53b46b92cecdbf8328ee5aba"],["/post/26671.html","e3409f458c9de7506ac718838908f813"],["/post/26737.html","143f2e2fb044d996c3643c3877a492da"],["/post/27045.html","2d45e47f8f4f0d65dbf944a6ceac8a71"],["/post/27621.html","1fed0430be42bdf9f74491a3d151099c"],["/post/27890.html","0f8474f93758db7572aa6682d2116d73"],["/post/27980.html","7486311ce1191ac2fd929461d88197a3"],["/post/280b588e.html","12feea7ec544aa9aba130b236b1b5cbc"],["/post/28579.html","7849aa20c72def3869c50cc500af6006"],["/post/28877bf.html","a66b52cad8f626ad86efbb71f974c34b"],["/post/28954.html","7aeb0c82925d44bc581e9b93777b4b89"],["/post/29378.html","c1d7331af9019ddf4f17d320d87b5b1a"],["/post/29949.html","7e861f7e6055344d8eabd670466750dc"],["/post/2ae43b86.html","22d97841eb6fd52bb78cc010b173cda2"],["/post/2ba82a45.html","29835719b80135029c819fe48c2400a3"],["/post/2cad8b04.html","95e26b717b2f5676b9d03dacaa4d9624"],["/post/30072.html","df4e5da32f77f2b4225e2d11e2d3bd64"],["/post/30479.html","57015c71d62b2673172bb63b0b1d7ad3"],["/post/31a6b40.html","f9bc6467804508634c22ff3defe4e1ce"],["/post/325cdbf2.html","b85b54f71bc398c71c920a285c288122"],["/post/3319ed9a.html","370bda3b736b9c44666540dddb0dba4b"],["/post/3320.html","a5ddafb3ffbea5cb9698dd91a6e38af9"],["/post/33cb1151.html","3e4feb8d15d4622eaf8485b8a981a4e9"],["/post/34811d5f.html","1ff5e2b05db61ad2c51b6382220ca35e"],["/post/348d4e04.html","f0bcad428e9a5e7e3b6022824ee4efd8"],["/post/3526.html","40babf0c3eae1f535f29467a099bd902"],["/post/35532.html","29f4d7b592b0fcef3ef6321568bd2930"],["/post/35848.html","5f4b1cc18d3f6e262fc3d9b11df08a9d"],["/post/37318.html","6651e4fba5aa0a085b4aa5e1a1bb7c7b"],["/post/37663.html","03a99a50df0bbcdc99f86fa668ef8d73"],["/post/38035.html","23703e1db5585d3cf991fdb307ed9afa"],["/post/38072.html","2a0bc6b34ff260d69915a77e773b30b4"],["/post/38145.html","5ac28f3a5b0ad9b50cbc4d3ad6d614dc"],["/post/39968.html","7e57d4e295239d7e76110089f4f8b84d"],["/post/3de4bc69.html","ac5afbfb5dd414824ab66d5d6a3f58e1"],["/post/40583.html","a4d2fd07f0f380393102c4418284628a"],["/post/40997091.html","25b6d6f02d7408eb55fb96d118684e62"],["/post/41129.html","23bc78c42b549d648ca9dbf52f8c22e1"],["/post/41763.html","094c0509b4407c5c535d600ebda794fb"],["/post/41829.html","616fed108303c67f3719878f4f5f594f"],["/post/41840.html","1e4fecc0133455df9dcf6f2f60ca0e80"],["/post/41e39f2b.html","32fecae957aecd8c99fd6c8e0e2b7748"],["/post/43817.html","5bdca39e4e33960ff53acf0cbc41d660"],["/post/43878.html","b6b91b97d47470214c18057c040d606b"],["/post/44250.html","25ab7cff7367bc710b9b05a3415cfa77"],["/post/44336.html","d5237476d76a5264d0f1401ef62f8fcf"],["/post/44454.html","440fcbea690f801338a816afc20dca9b"],["/post/44487.html","626868c6d6540ac1856610cbfd9a2921"],["/post/44914.html","436125d066301364471de4ac9a8832f0"],["/post/4551c130.html","5cc0c374471ceca6fc9ee433243e82eb"],["/post/455a4c92.html","c93c6908a527aea369c470605db78f46"],["/post/46390b34.html","cfcbae63c5b7e778f68608b519fb5332"],["/post/46466.html","5a0b642fc915930068daf79766aad5ac"],["/post/46925.html","2e71b99c75b4818f0d5b8895ec13b5fe"],["/post/47075.html","1fe5f2eb73c1ccd01a8e4c258e0423b8"],["/post/48220.html","31587858f3e3085e33f00a7b998df7f8"],["/post/4b1879e3.html","e25b00cbd49b12ddf0feeeb833e4c401"],["/post/4c720881.html","1d5303cd703a340312aabb954bb0399e"],["/post/4f4fc0a1.html","c9617fab64c5f5aa5a9630ae65bb48cd"],["/post/50daec4.html","a30fc946fba6a5f13bf121658d329c45"],["/post/51491.html","489f4a07b2eb901f1a74c5216eecbf4c"],["/post/51e63dcf.html","c77643ff150322da1af98e07c98af1b4"],["/post/52078.html","85955f28acf70e7336b403d9c3bc92b9"],["/post/53677394.html","ebfb4dc9c0d171bd547b32413d91c05f"],["/post/54300.html","2e0f977868cbe0cbe3141249a2ef6a62"],["/post/54612.html","e94dc2c038efd3ed42833897c694b239"],["/post/54613.html","a404f6edd67b7669b30dcb47c60cfd06"],["/post/54708.html","b421cf22ad3861a317c3ee811cb9380c"],["/post/54778.html","e72667cf29621e3305a016ce419a6cae"],["/post/5490.html","31587d4c8128d9932eb7fa72483afda6"],["/post/55046.html","a68f8dc7398c156278cf97401749b23f"],["/post/56929.html","abffaedbe5bfdf53a199b25e16556368"],["/post/57339.html","ff2d5bae21242076fda12339eee6a922"],["/post/57449.html","6208c21a2c950f78b3b6b900288ac2ec"],["/post/57453.html","c6a94c4531d475fd2425c5fb98054a8c"],["/post/57671.html","63d096d7476ce576f16a806ac61b89ca"],["/post/58313.html","f334167a1343cfc910fcc7800ede230a"],["/post/58481.html","7be12514086126311e75a71570d9cfd0"],["/post/58986.html","b9d89093ca2fe6c0fc2871482762e293"],["/post/59431.html","56e34a781962cece3d11bcdfc79acab2"],["/post/5951da65.html","a4215ee4d54406fafcd628acf3962f3e"],["/post/5be7e977.html","594f098cee6c49de2f2250ff38fdca65"],["/post/5f9e4eff.html","04f20553444662f4f9ff42285172182a"],["/post/604b49d0.html","bde841dbc6b78d2f6fa418fc42acdf4a"],["/post/61312.html","32fdf74d8e10115ec654e220feb6d665"],["/post/61738.html","8ff27c7827ef36d22f2902da3dac1487"],["/post/61809.html","a35ba8f2aebe93b70ccb0af15cff829c"],["/post/61eaf19a.html","7814494cff8d10529ec9ad69eb7222bd"],["/post/63002.html","c17cdce160daab8268b62f5a3d84ba5d"],["/post/63711.html","3b3de461f1458b37c01cb3659eaec480"],["/post/6587.html","1dc440ecf14a71b600b4a1644368aaef"],["/post/6589.html","844abe07381b67fc77dd2065b371b9c0"],["/post/67454659.html","d603af2d25b0852363e0fb0a428637ac"],["/post/6880.html","e54a70c903e3e8a8f90f6d783c557593"],["/post/6ee50502.html","ddef8eba46cdba2c085b4963d38fc7eb"],["/post/70263071.html","7e4724eabadcbca1ba3dcab6cca70c4b"],["/post/70d4f4af.html","2c0187e4662386544f4cab50db4cda24"],["/post/71038564.html","a39d104390ca8a4a241ba8c13750fc16"],["/post/7119.html","372d2706af328dcfb99ef57119784b62"],["/post/74e7fdff.html","407e744ba3a6777f800c9ff8766e2cc3"],["/post/7502.html","156e53e44dd76c6d654d42e5d2e5c45c"],["/post/75223936.html","51a661e63309aff327a0573708637505"],["/post/7564.html","5b47f7f68dbe73dafbe631782315608e"],["/post/766f9b60.html","5dc663d426d2ba15f4dd916692e64b30"],["/post/769365ef.html","cbe3d825e4557077a5a55b0d2fb3d231"],["/post/7ca31f7.html","8a6dd639850857cb44846f350c6fa854"],["/post/7d1c86da.html","56ffa89e6dc152c66a9e771ed81cecda"],["/post/7f3bcd7f.html","e6a9e89e7ab16b9573df5a527687b326"],["/post/8039.html","7e401789ea6564f66413cb7ca8b2ffa6"],["/post/8050.html","0dcd2c0ac236113ebd3c3fddbc9ce58b"],["/post/8072.html","0334b8fb2141fe527449801e30417c54"],["/post/8274.html","60cc2a70f8c57acd9494ef757fb5e016"],["/post/8372.html","245a4aa9eac0bb8546b53c21ec658be4"],["/post/8498.html","2f2d63dc0fdb904cb0f008d06bc5488d"],["/post/84ea90f7.html","30c116b7d7c49f2625a9813f78cf6642"],["/post/85b4e13b.html","7123df12e6eb00845fb9939f3aa99df8"],["/post/8e75958d.html","1ecdc28dca368510eca7a93b29a4169d"],["/post/912b2566.html","41ee563d2b659e6feaa8badd71e5e690"],["/post/9187.html","553f94f2155302d3a8d08e80847af530"],["/post/9197.html","0958df38dd7cd25fa6711dd6e8c30c65"],["/post/94ceb2fd.html","78a375fdf18e7b4125bb30149df2261e"],["/post/95495db.html","14944c8467345c25da05ead962af91f1"],["/post/97246020.html","0d220b44722757d367c19c990d6e3a04"],["/post/9954ba8e.html","45271ca3683e90a4e541d7fb39a84242"],["/post/9d855db5.html","2aca325cd0301ed6dbda2abad749712b"],["/post/a3a786d6.html","d1b8c86b2acb229b0a9edd3178c7c71c"],["/post/a444b428.html","9868614e365b9d5d391ca821ceb4d50b"],["/post/a50b8908.html","7c0f3e21aa87a0471a90b8a113e1a95c"],["/post/aa1eade8.html","48c3ba8ae8a29c22382c418c572929d2"],["/post/ade8c6d6.html","a44c8bb67d0476c1514f8fc75635c6ff"],["/post/ae8362df.html","bd70939ee1c4c0e6f9c3bb72cd9ce7fa"],["/post/af3eed3c.html","e4f2125ac794e043830a342a25d6e942"],["/post/b4c1d206.html","0cf15fac6c9a1d79b50bee92b9ec229b"],["/post/b75632a1.html","ef6328a7dfdce86fcb12d8366fc030d1"],["/post/bb25e9a9.html","22588c02f2369cab4e6802bfb699a71c"],["/post/bcc68732.html","205ebe9532a322fc7aae5809ab26f0ae"],["/post/bd608ff7.html","560cf855d87b8ac6e0dadc2d81650595"],["/post/c82a1c99.html","90fb872389b44744f0cafab0c8672c3e"],["/post/d213fc7f.html","85acc7491c9d2fba71ad9a7449b0916f"],["/post/d431fab4.html","efb8dcfc15789741016079e677c619dd"],["/post/d5381517.html","dec786e8e559c2878e1482b56508d5f0"],["/post/d94f88de.html","22693d9daa1381e670b5aba24bc93183"],["/post/e058ffd8.html","89b8d578abc8e011bb5e03f3e28239bb"],["/post/e0f8cb74.html","11dd5e470004fef7c8f95db33313c7a0"],["/post/eefe591f.html","6441c3a7141bd9d34b4cbc39c12fa26d"],["/post/ef296a07.html","84e64215d3b715ab039a952985042de6"],["/post/ef3a3fcc.html","6bb3c41ee68450ec7e020300b1cb2f12"],["/post/f201f9fd.html","57a52c29e00d72990ea5750bab7edd25"],["/post/f79e4123.html","a4f188de885c87e3c8f20700a11311e5"],["/post/f8648a1d.html","6c39ce6e95d9196085fd027178e15045"],["/post/f89cb603.html","6762b0fb158dab75527358604e685937"],["/post/fa288682.html","759ba46d19bbf8fd48a09ff6a2380233"],["/post/fb98053e.html","ae19cc824bb01d3e2bb49d8db70bfcbb"],["/sw-register.js","c8aa6391d6b726f5bf27e1685cd0ba3f"],["/tags/AT-T/index.html","f44393992ea98b6a298f6f1ab303206c"],["/tags/index.html","5badab629e817c8c28979abeaa839ab1"],["/tags/动态规划/index.html","91fbe9ebae79bc2e3a706790d3be1c3e"],["/tags/字符串/index.html","a7b9e1ec44f8a013c5f971c8492e8fa7"],["/tags/字符常量/index.html","61933126c4c196d2b3be298143d38db8"],["/tags/快排/index.html","5ce5b37d9d544a458605fdaa24913863"],["/tags/排序/index.html","e9038992ac95f65ad82ba6cce31a90ae"]];
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
