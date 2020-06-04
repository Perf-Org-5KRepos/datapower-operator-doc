(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Uxid:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("PageDescription"),p=l("InlineNotification"),b={_frontmatter:i},s=o.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(s,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"IBM DataPower Operator is capable of packaging, deploying, and managing your IBM DataPower Gateway so that you can focus on developing and deploying your configuration and code, and less on operations.")),Object(n.b)("h2",null,"Installation Methods"),Object(n.b)("p",null,"There are two methods to install the IBM DataPower Operator:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/IBM/datapower-operator-chart"}),"Helm chart")),Object(n.b)("li",{parentName:"ol"},"Operator Lifecycle Manager (OLM)")),Object(n.b)(p,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Currently installation via OLM requires manually loading the IBM DataPower Operator Catalog via a ",Object(n.b)("inlineCode",{parentName:"p"},"CatalogSource")," in an OLM-enabled cluster.")),Object(n.b)("h2",null,"Intro to DataPowerService"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," is a Custom Resource Definition exposed by the IBM DataPower Operator. It is the primary API you will leverage to create and manage your deployments of IBM DataPower."),Object(n.b)("p",null,"Below is a brief example of what a minimal ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," may look like:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"apiVersion: datapower.ibm.com/v1beta1\nkind: DataPowerService\nmetadata:\n  name: example\n  labels:\n    app.kubernetes.io/instance: example\n    app.kubernetes.io/name: example\n    app.kubernetes.io/managed-by: datapower-operator\nspec:\n  license:\n    accept: true\n    use: production\n  version: 10.0.0\n  replicas: 3\n  users:\n  - name: admin\n    passwordSecret: admin-credentials\n    accessLevel: privileged\n")),Object(n.b)("p",null,"The above Custom Resource would be translated to a StatefulSet with 3 replicas of production licensed IBM DataPower Pods, each running the latest ",Object(n.b)("inlineCode",{parentName:"p"},"10.0.0.x")," fix-pack."),Object(n.b)("p",null,"For more details, see the complete ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," API ",Object(n.b)("a",r({parentName:"p"},{href:"/datapower-operator-doc/apis/datapowerservice/spec"}),"documentation"),"."),Object(n.b)("h2",null,"Managed StatefulSet"),Object(n.b)("p",null,"The IBM DataPower Operator exposes the ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource Definition as a mechanism to deploy and manage StatefulSets of IBM DataPower Pods. When you create a ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource, the Operator will reconcile this resource by creating and managing the StatefulSet. For each ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," Custom Resource created, another StatefulSet will be created. They are tightly coupled: when you make an update to an ",Object(n.b)("inlineCode",{parentName:"p"},"DataPowerService")," instance, its StatefulSet will be automatically updated accordingly."),Object(n.b)(p,{kind:"warning",mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Warning:")," You should not manually edit the StatefulSet that is created by the Operator. Any changes you make to the StatefulSet will be overwritten by the Operator during reconcilation.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-39db7403cb0665f7e6e4.js.map