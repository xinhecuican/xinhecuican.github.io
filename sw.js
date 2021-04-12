/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1edb3acb868c36fbb13b0eac4df4e6e9"],["/archives/2019/index.html","e80d1fae1f2b9cc649184de6fbef1b01"],["/archives/2020/01/index.html","89b3706ac05b596ec490282961329457"],["/archives/2020/01/page/2/index.html","eb6ee21cdd8334ccc5e39411f823c90a"],["/archives/2020/01/page/3/index.html","bb6dcdd0edc3571bc5eaa2448d1609d4"],["/archives/2020/01/page/4/index.html","d2a2e340351b54218006d2e4428660ee"],["/archives/2020/01/page/5/index.html","815cdeecd33f40dedc96f5c3f0e81380"],["/archives/2020/01/page/6/index.html","78cbfa9e7f0584d35f0ce39ce3f06018"],["/archives/2020/02/index.html","19ed60796eb419bacee013140def3700"],["/archives/2020/02/page/2/index.html","a2d5f5a4a33f7ebebc4a60e7827bddb9"],["/archives/2020/02/page/3/index.html","a2e0e3d7c484871780b650a756e34153"],["/archives/2020/03/index.html","d67a2982a5191f2ee13a1d5611e44856"],["/archives/2020/03/page/2/index.html","73373271fd1e851b6dc2a93f9f0f0e63"],["/archives/2020/04/index.html","0d39bda9451435f982812babc39c81b3"],["/archives/2020/04/page/2/index.html","4033f570a90486c1c1bb40f3647044eb"],["/archives/2020/05/index.html","f2a70299239da2fd7e811c5b4a75dc72"],["/archives/2020/05/page/2/index.html","9b2e78faf020f04c744d4b55ca337ae8"],["/archives/2020/06/index.html","a4fabf6d4ce45a4a1446053f2559e49a"],["/archives/2020/07/index.html","5a9576f22585f34711936e9e4dac0245"],["/archives/2020/07/page/2/index.html","2efca3ae731b334534c80cd27f94ad93"],["/archives/2020/08/index.html","af338326ac065018b03c39c58e488146"],["/archives/2020/10/index.html","0de29a086615b5809bca31f8e83a24d2"],["/archives/2020/11/index.html","6f1e28d513470c0b1914930bc117ec25"],["/archives/2020/12/index.html","26c206092a9ee095df39c0cdadcfb214"],["/archives/2020/index.html","f37d5df34115563cad4121d3a676c6ff"],["/archives/2020/page/10/index.html","1961129511ee058d3f4a94d4ce9718e4"],["/archives/2020/page/11/index.html","b74fffd885382e7f3b5c3ee73ef8ca83"],["/archives/2020/page/12/index.html","a365009f1831e7ba1452c416dd78b851"],["/archives/2020/page/13/index.html","26b8ab4097930de63244f0bae9a870d7"],["/archives/2020/page/14/index.html","cf78bfdf859e15d62a3a7dd1887d058d"],["/archives/2020/page/15/index.html","ec4fe111339ea04cc02f56240d4ec219"],["/archives/2020/page/16/index.html","53f871e8ad17e2527df2c5d5cb681dd8"],["/archives/2020/page/2/index.html","74c2bb393e315313f7610b161baff0ff"],["/archives/2020/page/3/index.html","2422cdef80bbbbcfcf7d8cb29628b136"],["/archives/2020/page/4/index.html","d985d528c3dab53008c6c10f02883e43"],["/archives/2020/page/5/index.html","e6f09ded2fdddc9bbd91a96c6e05eb3d"],["/archives/2020/page/6/index.html","8f6178a56f4b88420923ca9b59f5f6ad"],["/archives/2020/page/7/index.html","7e77b89731f5d4d25d43618d6a05963a"],["/archives/2020/page/8/index.html","fa2c495a3d922387b83cec32469cc011"],["/archives/2020/page/9/index.html","1f02f37a3fa46c308be4031b2ea30779"],["/archives/2021/01/index.html","3fbf71f8a17a294e6a95ce7176e1af4b"],["/archives/2021/02/index.html","2c30ef647d6ca3d36e72d3e9f7348f80"],["/archives/2021/03/index.html","bf844a67d5e2c4c7900df6be27b45e47"],["/archives/2021/04/index.html","5e4ef2ddb0f2f9ac82b488f705d6897e"],["/archives/2021/index.html","07d17d911ad8c739f03e671779cbaeac"],["/archives/2021/page/2/index.html","948bd4f093a6ba6b41b3f66bfa3f5144"],["/archives/index.html","e2dc5778c906df6d4a03680776efe301"],["/archives/page/10/index.html","1b66ede6bdc3a9d4ba3e85be97f0d694"],["/archives/page/11/index.html","57757112eb9d52bfb63f41bd8d0da6e9"],["/archives/page/12/index.html","04bc2329db1dc23e2e58e5e421ef4834"],["/archives/page/13/index.html","f14e9bcec69035e3d0387e496bd4b023"],["/archives/page/14/index.html","a9acdff0e1bf23b619c6aae43186c69a"],["/archives/page/15/index.html","5ec871c6dd889e63d777cb3d275eccf2"],["/archives/page/16/index.html","d09198e0920cdc4327dee93be476e815"],["/archives/page/17/index.html","107b9508c0ee46618c5c29cdab2dfebc"],["/archives/page/18/index.html","f2634ed9fc00011960f2f4960d674119"],["/archives/page/2/index.html","d117447c9eb0f391ab8b9978fcf06042"],["/archives/page/3/index.html","e33a264303e1e0d7f1b7702d571d0cea"],["/archives/page/4/index.html","01406474796417cdbe8a0f090a12179f"],["/archives/page/5/index.html","3a5468dd2e5d0dd64d6501a496ce3460"],["/archives/page/6/index.html","9120c3da6980bfe3cd249de89f8e570b"],["/archives/page/7/index.html","e8ce2f520d5ba5d6c9cf9104520d7b3f"],["/archives/page/8/index.html","78a0f22aa358c5e1af7142d1a5f88017"],["/archives/page/9/index.html","a63188045259cef65ba3330f74f29df9"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","91779d508166f017db920c70df46766e"],["/categories/Linux/page/2/index.html","49d1a9c48593e9b8b0cd3e5ab76db7c5"],["/categories/Python/index.html","7294ff62a973e45c123b12c974ad0c49"],["/categories/Unity/index.html","3d3a8bc4fb4a3b741685a88fda07d145"],["/categories/c/index.html","ccf564f47aa568c5ae80045a412d6469"],["/categories/index.html","1cd935eae7a4d4b283e0bf1e6af5438b"],["/categories/java/index.html","54b2898bd0933e301d478a1915219c57"],["/categories/java/page/2/index.html","515c2b17f436ae969f45abe3de3644a0"],["/categories/java/page/3/index.html","1fe63c997b987c98a41a0de9a2d53c45"],["/categories/js/index.html","395bfec8a4a6c0eacbbedef074be8f73"],["/categories/next/index.html","90eba48923af31e1b10c6116167fa404"],["/categories/stl/index.html","c57dd90863ee14aea9e1721377948c93"],["/categories/windows/index.html","f95c6795182b20b4bbc2d5b6b56f5067"],["/categories/基础/c/index.html","be93960b503b82ca84309c0f6ff15968"],["/categories/基础/index.html","7348ebe81bb88f7622dce99a0e29aea7"],["/categories/基础/page/2/index.html","e61547442e0daae0958ddace51bb39d7"],["/categories/并行/index.html","7718462f20b10e306260b5a8a6d2c04a"],["/categories/数学/index.html","6cd8275631c512beed20867e414b69c5"],["/categories/数学/概率论/index.html","68c5206a2cf0953779e5e2954f5af30c"],["/categories/数据库/MySQL/index.html","fd46696342a05e9b54dd2538e0c1bbf1"],["/categories/数据库/index.html","2241e029385eb7d9d657dd4d34482ea4"],["/categories/数据结构/index.html","51b2e7d1466a44d1394832c2f0a7ff3b"],["/categories/数据结构/算法/index.html","2330f831e486cb7f84357bf4e7a48936"],["/categories/机器学习/index.html","8c785bb55a1d8cb4c56abc38629f19f0"],["/categories/杂项/index.html","692adf84e00f999c20df77f7aec4825c"],["/categories/汇编/AT-T/index.html","3214d2a1b74a4e6c620cf04ca40e729f"],["/categories/汇编/index.html","7456e86113dfe0aceb482e9b0120f7ca"],["/categories/汇编/page/2/index.html","c801f9c7610ced6a80be6ebfb53bf948"],["/categories/汇编/page/3/index.html","fd9063a13444bd425e3c0b92e839761f"],["/categories/算法/index.html","a0405e7ff4885a35ec45eee33048b4be"],["/categories/算法/page/2/index.html","44f40a734f3817e4eaba6e0c9e2eefa9"],["/categories/算法/page/3/index.html","fc00b506d1c77addde222ed1e0295707"],["/categories/网络/index.html","5ab89a6c4ffc86b504e1ab43502181e4"],["/categories/计算机系统基础/index.html","48ce859aeb79e735be9ea78426f70701"],["/categories/计算机系统基础/page/2/index.html","db13be072fcba868ddebaec5b0610d69"],["/categories/逆向/index.html","41b67b0a3cf58d0e75875638faddc1c3"],["/categories/逻辑电路/index.html","566d324f6490a742d004c8d8920d0f9d"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7f5a7ab3d50648caa79ed55aa0b811c0"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","a926a2d611360c40f51d8bfc800051bf"],["/page/11/index.html","8b3ea199809dcb38306f36b868e3c85a"],["/page/12/index.html","82d0798f10f6ac0ce4bac167c412060b"],["/page/13/index.html","25c009ab03fddaf9409a614802d42a99"],["/page/14/index.html","3dc241b4c375e0c43a1c9ad71807af27"],["/page/15/index.html","57076c6d141bc960ce0f80702870b62a"],["/page/16/index.html","c15c4e484f1576a8aea4a02aa33518ad"],["/page/17/index.html","20ef63a8b72d4861f0a099facc4563cc"],["/page/18/index.html","e6ab3affc7cd6d806a2b4d85c4cc4c41"],["/page/2/index.html","0a2b9151ef7b2f73942b89d9d450a9a4"],["/page/3/index.html","5853587d048f68ef6ea506b6ab5a752c"],["/page/4/index.html","c91d077e54563eed5169e9c355d20488"],["/page/5/index.html","982d1de37c1de586ec68a48d541502ce"],["/page/6/index.html","e40308599bbe91cd30d198a55204572e"],["/page/7/index.html","9b5ea2feae666fea69c3dc5a5e03e152"],["/page/8/index.html","63187b29379651a1790bac73d5c7d2bf"],["/page/9/index.html","1c1d84ac8a78b2e8398a3b0df31025f5"],["/post/10919.html","a9975897e5e03fe8a80b610b92fcfad2"],["/post/11051.html","2b52db5f9a6452c3dda5798912789930"],["/post/11306.html","791f1fb5fb6a802d821f10c0950cd068"],["/post/11491.html","c4c12f7c613608ec3f479a245c9e4011"],["/post/11799.html","e896d29f72ace49103a6ff0545aea7ad"],["/post/12334.html","71d218a95244806014410caa36787aee"],["/post/1326.html","62147994c2ee7e373fac70b06386236c"],["/post/14379.html","492a2de7da4c12c8828d5b39281475da"],["/post/14511.html","7a23fec2ce4f79e14770708d267d41cf"],["/post/15201.html","3112abe612471f72486ff73b5b359f14"],["/post/15425.html","c86a7dbdbf7d7c4955af54e072c46a5f"],["/post/16107.html","58d6f72152edd7a63b42d982b0a450e7"],["/post/16e2846c.html","a424bac425b2286399565d75d9cf34b0"],["/post/17862176.html","b5754cf439f465766b0d07c94b778da3"],["/post/18431.html","7936833b8d636671a6078adaa9e356c5"],["/post/18912.html","d3bf502ec081a0687fdb0e05ff530c11"],["/post/1b9c8662.html","c03bd4359ce55e6191bd9a483efb22ab"],["/post/20198.html","b2bc15da85d7c0594a1fd2d848585f4a"],["/post/20ff5ccb.html","ca147f0213125a06db32b5f2a8385689"],["/post/21624.html","2f7ef95b57dca4cc00adc88adf08f720"],["/post/2170659a.html","865fff0884fd3e05bc0ee15107591447"],["/post/22102.html","c3ed4530122bb771daaf1109253824b9"],["/post/22493.html","94a13a6580faba492f23a241fbd69b10"],["/post/235252ea.html","78d3c92404fd4bc4798d420f7a4170e2"],["/post/25699.html","a540e13606f49d89c21c8579103d3d3d"],["/post/2647.html","cf6942f6388a6adf8eae765c402ed64f"],["/post/26477.html","3a175a365b45a507f0f88e2a19fcdaa8"],["/post/26671.html","9d69b126feaa79225d56f60f449d0108"],["/post/26737.html","ea7ed0f10409442946dbb6fec0080e7a"],["/post/27045.html","03c89dc546874fd0bd03ff841d3512bb"],["/post/27621.html","13327f26b27950916025e7412953c828"],["/post/27890.html","f68737e87e12405cb4d514bb60982caf"],["/post/27980.html","474f917613dd075d93fd435ddfe73853"],["/post/280b588e.html","fc4e1d0994cc07fbaf2bad9f96e2babf"],["/post/28579.html","d5157b4a117d2fecc613b4f975f8633c"],["/post/28877bf.html","967c89841689b37b57c1eaa99de1e959"],["/post/28954.html","f5e52516be320bab79adee42e7a8a622"],["/post/29378.html","ca26dc3d96aeb2f41b5bc36b1bb28c54"],["/post/29949.html","9589c0d86f0d6930d962d48413b961b9"],["/post/2ae43b86.html","520082683743055e4c789b7dec8cfb84"],["/post/2ba82a45.html","1b719420e0e8f54460f376530300a83c"],["/post/2cad8b04.html","5af39f3c2916ecfb97481c6dc880cf39"],["/post/30072.html","18974629d178f29294fa04a46d88db0c"],["/post/30479.html","864d588c351eb207575bcd424d5bdfd1"],["/post/31a6b40.html","523b9eed031d814367676d2348351449"],["/post/325cdbf2.html","9cb01b57a68df9cd4737c202c4843133"],["/post/3319ed9a.html","0066371d2c37720ece3f987f4411cdb4"],["/post/3320.html","1a82a4792b5d05344c92a340e1889ce7"],["/post/33cb1151.html","505cb97c141d6520e0d76fdcb67950af"],["/post/34811d5f.html","7bcfd48ac5f84d80cb7e8c4c74ca65cd"],["/post/348d4e04.html","aa872b11e6cdf497b677a79f3c29b039"],["/post/3526.html","79d51cfa6857e9abbe8b965504a13009"],["/post/35532.html","bff4330112c517ab0c31cf5cb2ac0b0d"],["/post/35848.html","03581eae6e38d1e492b3b406c51be575"],["/post/37318.html","ff3003f348b2bd727b1ceab5a5440156"],["/post/37663.html","9327a7da06ccbda4aeb4a904519014d2"],["/post/38035.html","acc0a508a179fbfa09ffa7de646a82a4"],["/post/38072.html","09d79df6911fba66beb27d0a6c3b5485"],["/post/38145.html","bdc9f438aa8e1b318805213628f56e5b"],["/post/39968.html","5b854e30c828198fa80eda05b94b7d5a"],["/post/3de4bc69.html","23e005acc8f408ee36817c8b2aa6a6f7"],["/post/40583.html","e6e5851c60475df147681ee59573edf1"],["/post/40997091.html","2972e4f601dd5d5cd2ac4a5b7d5928af"],["/post/41129.html","ba8c63aa084e6fccc9fa2f33867c9e60"],["/post/41763.html","8016cfea5c844ea370236d1b525e0153"],["/post/41829.html","c8191c84dc81ea0a5117c327ce1b3189"],["/post/41840.html","253b9e22bd8d6f10a7972ab6dd350545"],["/post/41e39f2b.html","972d20365a7716a03ab55dcf2b8ed432"],["/post/43817.html","8306cd25dbbbfacc76d6576549364ae9"],["/post/43878.html","e4110d5bfd9d88ad59250db5237b6c60"],["/post/44250.html","33840351bf2191097965eb9094ee6602"],["/post/44336.html","9808293bf3090add17e1a7c63ca81ee1"],["/post/44454.html","ba6f734bb0db24cf3838f33f34393f61"],["/post/44487.html","bcb8b3a07cecc752f7a7ac2b90eb9f34"],["/post/44914.html","77d1899470c823926a28a50e85dd3d07"],["/post/4551c130.html","76ff3999238cd0f3d97a6603405b3281"],["/post/455a4c92.html","39e980c87c96d7dcd06ed194e7b47cfd"],["/post/46390b34.html","330c63acb938703e6103ddda520d0fb7"],["/post/46466.html","3c9a4364ca25e761e67ed1f5689e1834"],["/post/46925.html","c8d4f909623b1d44131dfb77c16a7a49"],["/post/47075.html","ad6f5611236b8815f0da5dd16495b418"],["/post/48220.html","28fd755e0df9d0f59de0755e793ce13a"],["/post/4b1879e3.html","0b4686bef9d76983a9973a29f1a77d63"],["/post/4c720881.html","0283bb98abe10e84768e2720c43edfd7"],["/post/4f4fc0a1.html","95bf9bd251d3498c66954c6e1bdd781b"],["/post/50daec4.html","3f6ec1666726975031a106e706fedf89"],["/post/51491.html","c784bb6a3fbdc34e62641bcc7b7f919e"],["/post/51e63dcf.html","00c830b042ae044a0e91214c69c2509d"],["/post/52078.html","a5916e665da9accbfa2fc0e39c24dd06"],["/post/53677394.html","1aba9a6f1e8f4dd593ccf979dd31c955"],["/post/54300.html","c0e348c192540c34340dd88c2aed1123"],["/post/54612.html","fb38a4267fc3ee6a58dee1eef29cd762"],["/post/54613.html","08ef17997a1e1b020a19bae778d6ce1d"],["/post/54708.html","6cc64c36b1baf29836e28191639057f5"],["/post/54778.html","bff3693d88c1196d9f9c5302b705b047"],["/post/5490.html","ac7b8aac3c9412e20a8b98935eb4cf11"],["/post/55046.html","b81b9a0eaea8cfdf7824657e4c12301c"],["/post/56929.html","f460b06cb69593bd2caa9f362d5969dd"],["/post/57339.html","679fd12cd8858fa3968064229d06cfea"],["/post/57449.html","152b632a0e14391ed83b7aa6cd969922"],["/post/57453.html","b75728ea0a1f2b0e4f4db5e3ea3beb3f"],["/post/57671.html","c2e0a16419d3dfb9a5377e353aa73351"],["/post/58313.html","2bd4a3a10b01108ff5e6f1ce33af6b9a"],["/post/58481.html","18c98361021246ce8e6c9bdbd0296210"],["/post/58986.html","e232ff2e1a7ac9d8eac4d6f65dc8f48d"],["/post/59431.html","827f38aa56902cedde371a41ce9b1724"],["/post/5951da65.html","f269f97bb98260844af70dac5a7159b7"],["/post/5be7e977.html","55f3a027d7f481bcc9571f2aac039c63"],["/post/5f9e4eff.html","82f2acf71ff787edb1b7a68706e955c1"],["/post/604b49d0.html","43e5521428cfb70f6a5ad8cf69281fea"],["/post/61312.html","993586495b3cd8c07022ad4463a79a07"],["/post/61738.html","6a7da976e35fd8d8f708b1f881311526"],["/post/61809.html","437bf0edd15c049b930949d4e8e05af0"],["/post/61eaf19a.html","ea519bff5c4170942df029e9adcb0955"],["/post/63002.html","539ee9ba7f29a6ad4c4fb5bf705bfc15"],["/post/63711.html","f6c2c47daa2b1cccf82a8e56088f9364"],["/post/6587.html","c524825b74af05b1301570e275ce5d37"],["/post/6589.html","9426e7ae5b6988e58879ecafccbe996a"],["/post/67454659.html","7c2acb94d5b82b4977b2ffc5647da814"],["/post/6880.html","e3d42bf854715582af1da14a6b86cc1d"],["/post/6ee50502.html","0e6bf7b5b28773da4b7cfa3d5512a6bd"],["/post/70263071.html","331ed3e7bc15101f03335c1230af23bf"],["/post/70d4f4af.html","90d26a9b6106f27b89882ff2fd3ace07"],["/post/71038564.html","6956d9c620bbb0d4dddcf65861ad7f49"],["/post/7119.html","4b56590c6c2606436bd23200dc90cae4"],["/post/74e7fdff.html","a24eb3754320fa0e48b3c46d9613bed8"],["/post/7502.html","0abdefe4d9e0efe5df17c12b07caea40"],["/post/75223936.html","d38bb79c5bd14a71892d4ddcc28f40c1"],["/post/7564.html","8f772352d912b1851344991f21c46e54"],["/post/766f9b60.html","0baf06cb742646cb351831546eab64a7"],["/post/769365ef.html","2cbceb41946071c9a0b0a4ec75574f1a"],["/post/7ca31f7.html","c5f069c29811b4eabefa201ce4cc2ab1"],["/post/7d1c86da.html","18bf663c59db52485394415630630e91"],["/post/7f3bcd7f.html","009a63a0fba02155997e10fbeb975a93"],["/post/8039.html","d84beeb491f4076083bc3d543fd9c997"],["/post/8050.html","0ebbbb0cd74f99694f76ae9ac729b7ae"],["/post/8072.html","e02ffb8792db8cc504106d094faefdc1"],["/post/8274.html","91f959ca48e7ad03110dae99a694c7c5"],["/post/8372.html","6fac35f0f6a1fe6902d23bed4403a650"],["/post/8498.html","4cd63e0dfb56d7a8978a46c59e61faa3"],["/post/84ea90f7.html","38b4a047cb22dcbe602e3ebff0d51645"],["/post/85b4e13b.html","c9b4d6625f44a75a22dcdd9d86195dad"],["/post/8e75958d.html","1f4ead228b3128fbab6d5530348b9638"],["/post/912b2566.html","31d157badd24dfbd5dd6a1547057adcf"],["/post/9187.html","7eb22ee54b9deeb27b251b504f76882e"],["/post/9197.html","37b3e3d87dd63ea595dddc07a671dad3"],["/post/94ceb2fd.html","1145d35721dc3a41c1cc22d18d6469e0"],["/post/95495db.html","61d461af70ac6b47931abded5ba39466"],["/post/97246020.html","3611f1d415193f339050884b973a1126"],["/post/9954ba8e.html","ea7bc3624792074052a2713e20f9f790"],["/post/9d855db5.html","2aa7091c280842c39c7ac037c3c3740b"],["/post/a3a786d6.html","e3447939b685809d4e4aa74891b21799"],["/post/a444b428.html","6858f4d9d3e4808f0f119b8cd1e7b18e"],["/post/a50b8908.html","0fe78dcfd78ff1c65edf1dd70a5615d5"],["/post/aa1eade8.html","cf580cb78507a2a6c2a67324eef5d2d2"],["/post/ade8c6d6.html","5508a66545185a8d9dbb5e096172e05c"],["/post/ae8362df.html","af2e7d466de84dda9454b79b5786a701"],["/post/af3eed3c.html","54fe3f95e1645315bb6eb09f657b2893"],["/post/b4c1d206.html","133e7f9f3db3cecf0a728e10644809ad"],["/post/b75632a1.html","bef51eeb4c64b2b131aba7ad04791469"],["/post/bb25e9a9.html","b65eefb03f63a266a9a8ad18962ed43f"],["/post/bcc68732.html","e263b68f338692bfe2aa91c4fee103a5"],["/post/bcf345af.html","6e1188b4360b70aeebe70a8832d4cafd"],["/post/bd608ff7.html","b644da7af184d90a61ddf7e5c37eacfe"],["/post/c82a1c99.html","92b77517d8518f997fc52a759d71563e"],["/post/d213fc7f.html","4636d0e412ad2c278bc44425b2df8340"],["/post/d431fab4.html","0b0db55bf4f33d87dfa5caab15c9cae7"],["/post/d5381517.html","2e2320418b17a146ad70810cc09192db"],["/post/d94f88de.html","9665291e86ed32782c4e7ea60f7af0a1"],["/post/e058ffd8.html","9c93f046b3f630fdcac8b825026d6ae0"],["/post/e0f8cb74.html","4268e869c7a31984dbdac4bebf78ca15"],["/post/eefe591f.html","f1c80bac3f3900a1c7ed6c7aa356ef24"],["/post/ef296a07.html","bd87e2bbc965b2712a476bdc7c9fd8d5"],["/post/ef3a3fcc.html","5064b15b72bd9129da70101190ffcd2e"],["/post/f201f9fd.html","610481f8eddd6c76f5b02c7f5b777e0a"],["/post/f79e4123.html","1656035d56b6426564b5ec442762c531"],["/post/f8648a1d.html","99c50a26ce42e5ad087c6c0d4902cc6c"],["/post/f89cb603.html","3940fbaa64c686d9de43e90334447c84"],["/post/fa288682.html","8c7d6fdb92ee45ca31cd7de81ece3cb0"],["/post/fb98053e.html","190c996d4a717731fb92232df6721f90"],["/sw-register.js","f755a98e71c4c9ed69e04551d96c7143"],["/tags/AT-T/index.html","7b43089e0b4a32d1732b1b90b74f60fa"],["/tags/index.html","11ba2622aa65db2755b37c73648a200d"],["/tags/动态规划/index.html","13e56cf4e574171aafbe4ff66f743bdc"],["/tags/字符串/index.html","3cfdd04fa78a3ff8733534ae2b6b63d2"],["/tags/字符常量/index.html","99ec2b441081e943a23b70af8057f82f"],["/tags/快排/index.html","d1f028e49979b61cfc338b6f4129ffc2"],["/tags/排序/index.html","2aec67b6541bf4e580864dda0e144620"]];
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
