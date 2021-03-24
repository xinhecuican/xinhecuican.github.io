/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ac5a8b86a364328162d94a300a855712"],["/archives/2019/index.html","613aa5c4825d955c428582b07f38969f"],["/archives/2020/01/index.html","991ebfd172c6018e7059e13a64764c00"],["/archives/2020/01/page/2/index.html","fe02b3489fe18b25d22e863db7ced397"],["/archives/2020/01/page/3/index.html","38d19495fe9dea1ff829cace9e90841a"],["/archives/2020/01/page/4/index.html","e83016ab1bdefcd52884640e11a61a19"],["/archives/2020/01/page/5/index.html","14984f910a19cef2d6fe9a3ac65fc32c"],["/archives/2020/01/page/6/index.html","c0b076d098f22a8f47ea2ccd3a50deec"],["/archives/2020/02/index.html","e1cfe6ac4a4264e46822da1959844280"],["/archives/2020/02/page/2/index.html","cc9a7fe306653140b8d0de2f36398e08"],["/archives/2020/02/page/3/index.html","60aa7a248d56e34c7dc90cf3e9b6434e"],["/archives/2020/03/index.html","88cc76231a44f4467391a39d59b49c94"],["/archives/2020/03/page/2/index.html","92c920a3c2257df307bac6eb5859e82a"],["/archives/2020/04/index.html","f1ddd5e9df9fda0147ac023c931cccc7"],["/archives/2020/04/page/2/index.html","63d545b2bb5bfffeca5d407a83dfb3f2"],["/archives/2020/05/index.html","dd235ef20fb727afa0621141abeabeb0"],["/archives/2020/05/page/2/index.html","1b117ac8747e9849d85a64141946b3b6"],["/archives/2020/06/index.html","16774694bdd9ceb4901774961c5b8b6c"],["/archives/2020/07/index.html","83e0dbb0be265f2b299d5c206ec56347"],["/archives/2020/07/page/2/index.html","14c7d71b4c7f720015f54ba3b63073d7"],["/archives/2020/08/index.html","244fced7cddbde423ae3508fcc056d63"],["/archives/2020/10/index.html","60b98a885205720c5568f3abe68d627f"],["/archives/2020/11/index.html","be0beadf4b314b11b95f4c4ca9edbe52"],["/archives/2020/12/index.html","d5f5dfed5ce0d199f3f254bfe419bebd"],["/archives/2020/index.html","bec76be9f5a979d6491802bd36c51756"],["/archives/2020/page/10/index.html","2f826cf0e6c75b8031ea324a0a1dd62c"],["/archives/2020/page/11/index.html","6186963f18e2c0114d38f53f1897d163"],["/archives/2020/page/12/index.html","6ae6462c217cbdf4d77a3a1a519e9f17"],["/archives/2020/page/13/index.html","b3a2520e9e0c323b4712629c94d6b76e"],["/archives/2020/page/14/index.html","f2b5a15c0ae240006f71c4e526b207b2"],["/archives/2020/page/15/index.html","fc7bf12f28dbff73af7a89a09e634ad4"],["/archives/2020/page/16/index.html","b30659b660a93d439406ff8f8c7735f6"],["/archives/2020/page/2/index.html","b2c16b4dcc994abffae16df8aa0a6bce"],["/archives/2020/page/3/index.html","7547ef30e9c7a437f8d3dc91f858e443"],["/archives/2020/page/4/index.html","33de96f321273f33416ecb228ee15abb"],["/archives/2020/page/5/index.html","ce794abdafff532ce4dc54cb865ec523"],["/archives/2020/page/6/index.html","5ae3e86f911d309f78d190adaf26a26a"],["/archives/2020/page/7/index.html","f221d8cb86a1b64ac0830223e05a3cd9"],["/archives/2020/page/8/index.html","ef4b265958b5a083ad2202c994468568"],["/archives/2020/page/9/index.html","70bfec2ae00e893379c6d0f1bfd24fd2"],["/archives/2021/01/index.html","22853c2e8bd85b20003bc985d318813a"],["/archives/2021/02/index.html","b0c24b9e35c31f6c98abfc97f12792bf"],["/archives/2021/03/index.html","08761d384922a0b948b598ced3d3e0e1"],["/archives/2021/index.html","676727d5e7cf241627bb64e956f0bd93"],["/archives/2021/page/2/index.html","0ebe9cad8b73c5f544910c9e0d63f00f"],["/archives/index.html","fb784308dbe0c87dd13e3057cf223cb8"],["/archives/page/10/index.html","1fda19ddb951ef353ec2cfc6cbe0b98b"],["/archives/page/11/index.html","86e6df38c53317cdd90018de7fbb49a1"],["/archives/page/12/index.html","48b102e6fdf40fbab2d91cc7e7929e79"],["/archives/page/13/index.html","b0b26f4704d8ed57395a15e5dc92aebb"],["/archives/page/14/index.html","048034210d08d85d06df1b6045c1f305"],["/archives/page/15/index.html","d3dadd4fa90579dbcac299d404b55a9b"],["/archives/page/16/index.html","889c4df5cbdcc6284e9e700befc8a542"],["/archives/page/17/index.html","5420e05f8c189fb2d5769bdcc7087ea7"],["/archives/page/18/index.html","7d9b4d3f2b5160e3c38d7efba634a096"],["/archives/page/2/index.html","17662f8f44772116b11f87f9873b1367"],["/archives/page/3/index.html","6292ee1cb44ba977ae535edb3a984038"],["/archives/page/4/index.html","b6134d8130f61cfafc043aeda068e9de"],["/archives/page/5/index.html","70675eef854d8fcd5301294721e35a45"],["/archives/page/6/index.html","f23562d99b4097d7a083fe31bda7785f"],["/archives/page/7/index.html","45ee480844e616b81f1a537762b47c30"],["/archives/page/8/index.html","6460f17a4689a4af138d6abf1d5d88ea"],["/archives/page/9/index.html","287abc0013c13df19fb342b596d5ebc4"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","0a62fda81f88adc404f9eed6d194917f"],["/categories/Linux/page/2/index.html","7769a07993344e4fca165f9638913e43"],["/categories/Python/index.html","2dce061b4b0eba9329a8c71f1b896872"],["/categories/c/index.html","aa8778ed681b62654995446cb2c7e104"],["/categories/index.html","d943bd446d672c70e5796ca35f9da172"],["/categories/java/index.html","85013789e8508bc69d048180eb2e23a6"],["/categories/java/page/2/index.html","d1e831dfd4202c44ae239e33de44222b"],["/categories/java/page/3/index.html","632b6c5851b9e1e5478a18eaf553c299"],["/categories/js/index.html","e8d055f091e288121401b6b2601e10a4"],["/categories/next/index.html","9fbd941f034e49b271c8c717df9dc9cc"],["/categories/stl/index.html","690ac8b3c9b469a16c93275e57f8262f"],["/categories/windows/index.html","3dd0a5c0ddeb4d82d09e0070b70742a8"],["/categories/基础/c/index.html","16ac403aeb2b385eb5174e618f2aa580"],["/categories/基础/index.html","a124a12829230292f1bc73e78c2fcb57"],["/categories/基础/page/2/index.html","ba3c1fd9d2873eb6df4e651c8cec1ba7"],["/categories/并行/index.html","39f02ad506ef32caa9a849bb7dc3f5f1"],["/categories/数学/index.html","a5ce92bc7f6363bd9cc454be80b66023"],["/categories/数学/概率论/index.html","7a50ddf231028c385c42702ffefb7b27"],["/categories/数据库/MySQL/index.html","594f5ff4bc2527556703c4d51e99b625"],["/categories/数据库/index.html","844b60d7f91641f66b753e2e0aedc9f9"],["/categories/数据结构/index.html","d27a07723f3e091d6777db196ae83b91"],["/categories/数据结构/算法/index.html","13d6fd9ab0d4152d143efe1abd81df15"],["/categories/机器学习/index.html","fb7aef6e727593302e119a32241ece8b"],["/categories/杂项/index.html","e14a98e7d6989f42a1ed2a375ef1d8cc"],["/categories/汇编/AT-T/index.html","7d32bcb85de08620e9be69151d0177ea"],["/categories/汇编/index.html","2c80a3f99cfbc2dcfdee09922fda4faf"],["/categories/汇编/page/2/index.html","d0aba1a2b7403b7fd73ff9ed486c5fa2"],["/categories/汇编/page/3/index.html","28a34491d9aad187388f57a2739fd298"],["/categories/算法/index.html","bc351e5fd39f7dea40d34776451efdce"],["/categories/算法/page/2/index.html","8c9b7770581e2015a08f267185263c60"],["/categories/算法/page/3/index.html","193c0d9dda3932ecfc10fdd82a8f00e1"],["/categories/网络/index.html","bc7cd3b848ca833c4d75dcef25da5bcc"],["/categories/计算机系统基础/index.html","6ee6ec0c632c3d21bc41b6c7258d1c62"],["/categories/计算机系统基础/page/2/index.html","3a3ced1b81ece8c25e664bb336137ca6"],["/categories/逆向/index.html","da9e7ced9468abd3a1ab6f24caec1bc4"],["/categories/逻辑电路/index.html","0f440a1dca37cbbdd3c9a103d05088d3"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","872f41cafd846c1437a5912856706cc0"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","2e8a66465a76365ba9bba3e25dde55a0"],["/page/11/index.html","c0d5c7e4096bbac5504ec289825a4bf1"],["/page/12/index.html","e0451f5886e3201fb25301ef38e3dcd3"],["/page/13/index.html","6a354b3a843fcd4c586d9190b04ef082"],["/page/14/index.html","23890d98da27b4e1799a464a46839dc7"],["/page/15/index.html","1585f5f80feb246377ec8bc95a4444fa"],["/page/16/index.html","f95d7c9b7c3519a0f3d4e6e99637b4ba"],["/page/17/index.html","e819224f54ede4b67a63516f5f163815"],["/page/18/index.html","d4669da25006a5786010de6d2f4bfa59"],["/page/2/index.html","c5c202f394854de6ef921d15dd1b7f00"],["/page/3/index.html","a16013bfb2e06e974fed0a73ef8b0128"],["/page/4/index.html","5e93690b149fe236b95569c6df7eb9d6"],["/page/5/index.html","92772ef9920d0840a5f4db178fcd7bd8"],["/page/6/index.html","90ef3d6c876c7be028e15fb102ec42e7"],["/page/7/index.html","9a527a6400e37d59afcffc868cac2243"],["/page/8/index.html","8ec49d6a5901e7d91c76b9afb7d2c03a"],["/page/9/index.html","c2ec09c249c1bc3bfc3a33e0d88f37b4"],["/post/10919.html","7b5475e208dcd0d68e2e0ebae86cb4e6"],["/post/11051.html","01636b6919e10410b2c7bd6054d6783b"],["/post/11306.html","0b2dd72d9b867403eeaeeb0c01cf7f8c"],["/post/11491.html","a3dbfd912397cfc1c38797c57cc5264c"],["/post/11799.html","87381cfe0688e60f6f01a390a30abf1c"],["/post/12334.html","0f71246a03efb6eee22445682640ce8b"],["/post/1326.html","c9e3061e56353db3c5611a0e9da34d20"],["/post/14379.html","6f18b7c41966aec5e877a6c7b74d8b46"],["/post/14511.html","c830a60e1e36489c71ec1391abb007a1"],["/post/15201.html","511b597d8e13ae552543523892c0e768"],["/post/15425.html","7183f673f1ff31ef01a53e1bc466fa12"],["/post/16107.html","222f2f4117d8fe1f20957894c96ee70f"],["/post/16e2846c.html","a0e95afbb8e77d170c6595ec1c297b08"],["/post/17862176.html","1c814bc4bce4c52e9e735d64e5a09ff3"],["/post/18431.html","15d04c50a46b9090ccece6629f22a18d"],["/post/18912.html","7b5de7404fec07764d574a115f4ee30c"],["/post/1b9c8662.html","66396fbc35a529db6b504f77a188f5d5"],["/post/20198.html","52485ab380012839263ecb6594986994"],["/post/20ff5ccb.html","e2aa106dfbccb95d4786596f4fce5348"],["/post/21624.html","ad00874743ffef14b0cfa116a2f890ff"],["/post/2170659a.html","bc20e89f1aba902871709806d05d16a0"],["/post/22102.html","891bde6dc3a28487c4063ce1cfc03e12"],["/post/22493.html","41983b1de685b040c861fccbd52e584d"],["/post/235252ea.html","79bf54f898d5417e7337320580b37b99"],["/post/25699.html","5ba58a28a31f8a797ed027b3ceadc294"],["/post/2647.html","526a27e527a387814a9e4172e0f77474"],["/post/26477.html","94d740e128a63dc34fdc1ab6e0b3dd59"],["/post/26671.html","2f7d71ba448b0072aba48de65d21de81"],["/post/26737.html","2d2f51f981c1ef006b71cb3e7630a00c"],["/post/27045.html","0d7187a085938f0613dfcad785b71653"],["/post/27621.html","766600d934dca53ad87e06daac2b3f08"],["/post/27890.html","193ebe72a730210a865064831ec125fe"],["/post/27980.html","44be54bd76b5db3f70a8b340ae4da55d"],["/post/280b588e.html","4d1a345cad315f3e33285487fb1c6bf1"],["/post/28579.html","9ab7fd0f6f09c3faf062d114634e1b91"],["/post/28877bf.html","70aba27dfc00e89ce328d3acde6449b6"],["/post/28954.html","d5b1d71b1519c5a4d94b8acee59e6e49"],["/post/29378.html","19a9a14b85b5ac613a11a4b97e0406b6"],["/post/29949.html","8786c5302228cca6073aa96034660000"],["/post/2ae43b86.html","6088236c401e0af996cd0d737ed5d167"],["/post/2ba82a45.html","2527131a2a8ba92d4989de8945f55315"],["/post/2cad8b04.html","555e5ff230f758d4aea97029612e5180"],["/post/30072.html","ce7c963eaa6371dbae729b4ce62759df"],["/post/30479.html","8aabf981603b7cfa0abe541cc5341693"],["/post/31a6b40.html","ca1ba01ca90a421d2e187839f21b3ab9"],["/post/325cdbf2.html","992bff56c33ea66ea4d7e81d441f506d"],["/post/3319ed9a.html","008a7cf707d52bc28bd335a0a64fbb29"],["/post/3320.html","b0a0c8d8bd12abf6697aefdd547b19c0"],["/post/33cb1151.html","c58802c265e299312c4877f6a2204f58"],["/post/34811d5f.html","49292c6e0cd6768479a4a51230482276"],["/post/348d4e04.html","42cee2bd28d8dec17a74efd1704cc8c0"],["/post/3526.html","73be648f8be427da07e9ac95dd48f5fc"],["/post/35532.html","6e332be28286594a56fe1a1889d43c56"],["/post/35848.html","8ece117589ca757c9f207ed31afab909"],["/post/37318.html","fd38401ea1f89335b91347656b4e6248"],["/post/37663.html","70d8bf8c958eabe9e4b723b678b5c53f"],["/post/38035.html","c762e91f03f003969d7a187644935270"],["/post/38072.html","716394e5c5176202eeab37a050f50c99"],["/post/38145.html","f173819d47819307f2426aa17279062a"],["/post/39968.html","5af0f46428ee2283dce0583d8359b786"],["/post/3de4bc69.html","1296de3802394015b462dd6f62f6320f"],["/post/40583.html","1a8d78e68ba9b447958e09d3e8c3d087"],["/post/40997091.html","c52cb6fcc6837bd8d936bbf022db8c17"],["/post/41129.html","f6f8f7db8139ab85e4c6a50aad183044"],["/post/41763.html","c7320c49aa4d2fc44f30ea3185f63615"],["/post/41829.html","eb2382d54d48ee2c242e1667d0303780"],["/post/41840.html","13621400841bb5144a9ed48dde9db044"],["/post/41e39f2b.html","eb1ebc5d6d0fee9cd6cfe2891e944ed9"],["/post/43817.html","c7113443969a6868c1996c0bc0edb3f2"],["/post/43878.html","d80383eca490fd793f9e22616bd3677b"],["/post/44250.html","1a1f71cfb9e4061c060766071ab20530"],["/post/44336.html","6b68314ad2b3b848befd0a0a2f6ba183"],["/post/44454.html","bee54735eb64c99a7bba53a54cc5dab0"],["/post/44487.html","e1d034daff725ffaf1603db2874a15f6"],["/post/44914.html","bcdc50860070dea3368318294d49bfca"],["/post/4551c130.html","03efa195c36ff4f44bd805048e5e225e"],["/post/455a4c92.html","9878fd9c660eb790a555fc079b33c464"],["/post/46390b34.html","2309c631717158b02cb81f74543cf718"],["/post/46466.html","ad04cd91e269514e108c32d5198e7fea"],["/post/46925.html","5f428208fa19964e3e78f3c39d2a9fb2"],["/post/47075.html","f9755d285835d2adac4d81108d00a600"],["/post/48220.html","230609ce2c7f4a722908893dbc1ed8c1"],["/post/4b1879e3.html","504feebe991cf10de3beccd46f0dae7d"],["/post/4c720881.html","32193c64b0fa3cc9c1ee9f85bbdfbbc7"],["/post/4f4fc0a1.html","8b0678c4d3c8bce3ff70e1f22777f016"],["/post/50daec4.html","eb580c24ba48d6dc8aa7f4f61c304d73"],["/post/51491.html","5fcbcd8e206d15c4ec45f445d0aed5e0"],["/post/51e63dcf.html","ca56282c64d51b315252e2d893d1aaba"],["/post/52078.html","e03b46dec1a401fc93fbe92e20c621ab"],["/post/53677394.html","bf270d9245176d28e11a0aa63b037cdb"],["/post/54300.html","9bac5c280217387f520c94953579faf2"],["/post/54612.html","6bcf0f3f10c64932766bafccfcf4a263"],["/post/54613.html","534372984638a06e204e599f33b2a5d7"],["/post/54708.html","dad1efdc15697ea7bd60a386fd492fe2"],["/post/54778.html","c93db9109aa3aa4caa32ae7bcbe97070"],["/post/5490.html","b257857f80017ef1ae225bd1a2d938cc"],["/post/55046.html","fc323d6205bbd9745010917563a49681"],["/post/56929.html","02552cb97bf051b94dd3765c9ad7ccda"],["/post/57339.html","39bc887294129279552a8a17b5d336cf"],["/post/57449.html","23ab8ebe81fddd88484d6baf8f872179"],["/post/57453.html","f0abae2976283d93fd4526eb4c8713c7"],["/post/57671.html","e87de1b82e83179313864635b56d2d71"],["/post/58313.html","ac94b6158dbc72473d9425256383d539"],["/post/58481.html","da8abda4768782c86bc4eace1f0f66cd"],["/post/58986.html","c5e15b48fbdf60ae613d0b43ed7a8a0f"],["/post/59431.html","5bcefb878f4fa865506c68d9fc250ece"],["/post/5951da65.html","2d6147cd31efb9258d3108d4ee392a7d"],["/post/5be7e977.html","21e8f7ec7bed4e206b977819e0770108"],["/post/5f9e4eff.html","d06a9f9b465313015a7d2903bcdeced6"],["/post/604b49d0.html","315325dcdb10bd3123953c8541ac310a"],["/post/61312.html","59f4c75ef7195a3c99dad0857a2522e1"],["/post/61738.html","8cd2a35459f4a28969f7784f04b6d80d"],["/post/61809.html","8df4e77ebafe1216d588af90502647aa"],["/post/61eaf19a.html","c44213939227427dcf1273b9a2493368"],["/post/63002.html","7534dfdbea72018682ca596314560874"],["/post/63711.html","191581b77b5c18010e4d5047af056f9f"],["/post/6587.html","0c7fcaf57ae462d36981c13e1ebce00c"],["/post/6589.html","f13cae65a77808cb270e70fba8677cdb"],["/post/67454659.html","413ef9afe81b3b4e9e2619c26c0f4ca0"],["/post/6880.html","e262d052180cef046abf3d38a7e58a1a"],["/post/6ee50502.html","208e1cd0d7ed4d9e3da1bd3546dcbf92"],["/post/70263071.html","84270b7b7f46d9b9c5a792033624c089"],["/post/70d4f4af.html","5221c2c5a8198947268d8ef1ddaef709"],["/post/71038564.html","ce15c85fc4b1b14530d9b097b785929f"],["/post/7119.html","5f9fa81710c601a4112622aa570467ee"],["/post/74e7fdff.html","c3e839598d1429e45ea39e033455a01e"],["/post/7502.html","55efc12597ac53edf02c60a74b408390"],["/post/75223936.html","8bfe92964e4773bb1ccfceed7d6f9c5a"],["/post/7564.html","50725cd94edd429b96e15ab74de2ee67"],["/post/766f9b60.html","d1a64832191ebe9f1f615907b9fbd17f"],["/post/769365ef.html","5054ddb7d1e23d08e8cbccaff72d7726"],["/post/7ca31f7.html","d881bec190e24280a53140ecffaf30de"],["/post/7d1c86da.html","1b25b4882b6365524d8c6e459b9d792e"],["/post/7f3bcd7f.html","5cdce95212f0be3600e9a1f173ef3c13"],["/post/8039.html","c67bdf58cb1c783fee3ae8c8776b0e49"],["/post/8050.html","6ce2842d48adb7f3e62d4845b6451cf4"],["/post/8072.html","e4206cbc88c58f5e57730f2bb9b2c774"],["/post/8274.html","b21783dedc42c6b524665ef9548b5db0"],["/post/8372.html","250602b4c0ac6f7c41e60ba7023374b7"],["/post/8498.html","d2557af09f6f53b38f5763ccc413e757"],["/post/84ea90f7.html","f8cd23b2320b1138a3f57517f10df685"],["/post/85b4e13b.html","19ec8d06f5750ff3e82e444c7e28c071"],["/post/8e75958d.html","107faa4536d056cdd5948f4bd6119b51"],["/post/912b2566.html","6899b6e7b06cce9093a7aa9dbca70940"],["/post/9187.html","1c33769c7947a8957d345f208f7c5d5f"],["/post/9197.html","a8335e9206fce022e3677a5f1eb6105d"],["/post/94ceb2fd.html","b346bb538808790b279f589162a2b0d4"],["/post/95495db.html","189983ac4c980c3c9e63732de5013d30"],["/post/97246020.html","32e050483006abb11ea406a4eb9fc2d5"],["/post/9954ba8e.html","d0bade288e9aa0906b25120ec479cb16"],["/post/9d855db5.html","2fe867c8335f69449862520d17299a75"],["/post/a3a786d6.html","ecb1c3bc0581ca001e89ff9d6d33822e"],["/post/a444b428.html","dcd9ce4a4b5764ef47a0a7be9138ff4c"],["/post/a50b8908.html","02e4de9991c8bc3dac9c703a2c463e87"],["/post/aa1eade8.html","b55d4c82521d96c143233e93749e22da"],["/post/ade8c6d6.html","525fb70757f08e93edf25dfe7f62a31d"],["/post/ae8362df.html","e13ebba61c2f6d8e4f6ec3578d48ef3d"],["/post/af3eed3c.html","6ba33c1d9f006fc493e6208a04989e18"],["/post/b4c1d206.html","a4ea8951dbb4aa3bbd54304b5ad37efd"],["/post/bcc68732.html","f87239a4539ff4d9628e0f2a9e35c45a"],["/post/bd608ff7.html","7c92b37612d26dc709c35e8ae437301d"],["/post/c82a1c99.html","6d7d1882796bbfb2fc6b4bac3c22da13"],["/post/d213fc7f.html","91b7868bff045a3765ff8c0bc0fba33c"],["/post/d431fab4.html","9113528645e8fc1b1e0ce9541bb10ea1"],["/post/d5381517.html","a3ed8383fe5e4a73ec4c26d9aeea39fb"],["/post/d94f88de.html","c84bbe1a7cf503b87e50f08db3ae4f61"],["/post/e058ffd8.html","cf764db74d5f5fd47ae538582342a2d6"],["/post/e0f8cb74.html","0aea9e5414c869b0c0b481127ce48ca3"],["/post/eefe591f.html","592db33e7668d994560fd4a47f349111"],["/post/ef296a07.html","daa80c9baa902e62727d93e7c7ff47bb"],["/post/ef3a3fcc.html","a12c48f445e065f4c426bd3981db89c8"],["/post/f201f9fd.html","ab71ec0dd4565c2a4bb19dc669fff6ea"],["/post/f79e4123.html","afb16b5d6f4dbeebe362c8772f7e6427"],["/post/f8648a1d.html","e3b7d48cd43167961545c70a447876ee"],["/post/f89cb603.html","0462a52d33b5614124ca4401f2d9ee22"],["/post/fa288682.html","a69bc3bd7db6870fbcd15b196dbd9fdb"],["/post/fb98053e.html","6f698a301778eaf0c75d3f0fa1ecfc4d"],["/sw-register.js","fed73c61b3b75c7b9d4f5862fd791a48"],["/tags/AT-T/index.html","cbb325dbb8e1d9b16d7ecfaaf64dd210"],["/tags/index.html","73315cfed056ceedc33e35679edb8971"],["/tags/动态规划/index.html","8a0bd6b9b62ca1590c5d78970f6180f1"],["/tags/字符串/index.html","6fb1a10bf42c10d3f614d265610b5dd7"],["/tags/字符常量/index.html","add954c504b97f8f0a2dc1e68e3c7765"],["/tags/快排/index.html","ac391b16a261ca9b5ff5323196f11174"],["/tags/排序/index.html","913913ed2958881410fcca55c397d368"]];
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
