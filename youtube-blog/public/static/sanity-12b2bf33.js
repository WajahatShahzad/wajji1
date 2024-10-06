import{defineType as e,defineArrayMember as l,defineField as t,defineConfig as a,renderStudio as n}from"sanity";import{structureTool as r}from"sanity/structure";import{visionTool as s}from"@sanity/vision";const m=e({title:"Block Content",name:"blockContent",type:"array",of:[l({title:"Block",type:"block",styles:[{title:"Normal",value:"normal"},{title:"H1",value:"h1"},{title:"H2",value:"h2"},{title:"H3",value:"h3"},{title:"H4",value:"h4"},{title:"Quote",value:"blockquote"}],lists:[{title:"Bullet",value:"bullet"}],marks:{decorators:[{title:"Strong",value:"strong"},{title:"Emphasis",value:"em"}],annotations:[{title:"URL",name:"link",type:"object",fields:[{title:"URL",name:"href",type:"url"}]}]}}),l({type:"image",options:{hotspot:!0}})]}),p=e({name:"category",title:"Category",type:"document",fields:[t({name:"title",title:"Title",type:"string"}),t({name:"description",title:"Description",type:"text"})]}),u=e({name:"post",title:"Post",type:"document",fields:[t({name:"title",title:"Title",type:"string"}),t({name:"slug",title:"Slug",type:"slug",options:{source:"title",maxLength:96}}),t({name:"author",title:"Author",type:"reference",to:{type:"author"}}),t({name:"mainImage",title:"Main image",type:"image",options:{hotspot:!0}}),t({name:"categories",title:"Categories",type:"array",of:[{type:"reference",to:{type:"category"}}]}),t({name:"publishedAt",title:"Published at",type:"datetime"}),t({name:"body",title:"Body",type:"blockContent"})],preview:{select:{title:"title",author:"author.name",media:"mainImage"},prepare(o){const{author:i}=o;return{...o,subtitle:i&&`by ${i}`}}}}),y=e({name:"author",title:"Author",type:"document",fields:[t({name:"name",title:"Name",type:"string"}),t({name:"slug",title:"Slug",type:"slug",options:{source:"name",maxLength:96}}),t({name:"image",title:"Image",type:"image",options:{hotspot:!0}}),t({name:"bio",title:"Bio",type:"array",of:[{title:"Block",type:"block",styles:[{title:"Normal",value:"normal"}],lists:[]}]})],preview:{select:{title:"name",media:"image"}}}),c=[u,y,p,m],g=a({name:"default",title:"youtube-blog",projectId:"86l1kpea",dataset:"production",plugins:[r(),s()],schema:{types:c}});n(document.getElementById("sanity"),g,{reactStrictMode:!1,basePath:"/studio"});
