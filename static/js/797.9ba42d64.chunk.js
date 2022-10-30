"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[797],{4797:function(s,t,e){e.r(t),e.d(t,{default:function(){return $}});var o=e(1413),i=e(5671),n=e(3144),r=e(136),a=e(5716),l=e(2791),c=e(885),u={descriptionBlock:"ProfileInfo_descriptionBlock__f9mbS",backgroundPhoto:"ProfileInfo_backgroundPhoto__WSZA5",descriptionContainer:"ProfileInfo_descriptionContainer__HlqKZ",profileAvatarBox:"ProfileInfo_profileAvatarBox__Ex0TZ",mainPhoto:"ProfileInfo_mainPhoto__s457x",photoButton:"ProfileInfo_photoButton__m+NHi",profileDataBox:"ProfileInfo_profileDataBox__MmPpA",statusBox:"ProfileInfo_statusBox__M6lfF",profileDataForm:"ProfileInfo_profileDataForm__Ne2KE"},d=e(5892),f=e(8987),h=e(184),p=function(s){var t=(0,l.useState)(!1),e=(0,c.Z)(t,2),o=e[0],i=e[1],n=(0,l.useState)(s.status),r=(0,c.Z)(n,2),a=r[0],d=r[1];(0,l.useEffect)((function(){d(s.status)}),[s.status]);return(0,h.jsxs)("div",{className:u.statusBox,children:[!o&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Status:"}),(0,h.jsxs)("span",{onClick:function(){i(!0)},children:[" ",s.status||"---"]})]}),o&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(a)},value:a})})]})};var x=e.p+"static/media/photoicon.f44d951526acbd5ef97e2bb608a2b2f2.svg",m=e(704),j=e(1117),v=e(9234),_=(0,m.Z)({form:"edit-profile"})((function(s){var t=s.handleSubmit,e=s.profile,o=s.error;return(0,h.jsxs)("form",{onSubmit:t,className:u.profileDataForm,children:[(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"save"})}),o&&(0,h.jsx)("div",{className:v.Z.formSummaryError,children:o}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Full name"}),": ",(0,j.Gr)("Full name","fullName",[],j.II)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",(0,j.Gr)("","lookingForAJob",[],j.II,{type:"checkbox"})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),":",(0,j.Gr)("My professional skills","lookingForAJobDescription",[],j.gx)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),":",(0,j.Gr)("About me","aboutMe",[],j.gx)]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,h.jsx)("div",{children:(0,h.jsxs)("b",{children:[s,": ",(0,j.Gr)(s,"contacts."+s,[],j.II)]})},s)}))]})]})})),b=e(7155),P=function(s){var t=s.profile,e=s.isOwner,o=s.goToEditMode;return(0,h.jsxs)("div",{className:u.profileDataBox,children:[(0,h.jsx)("div",{children:(0,h.jsx)("h2",{children:t&&t.fullName})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"Looking for a job"}),": ",t&&t.lookingForAJob?"yes":"no"]}),t&&t.lookingForAJob&&(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"My professional skills"}),": ",t&&t.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:"About me"}),": ",t&&t.aboutMe]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("br",{}),(0,h.jsx)("b",{children:"Contacts"}),": ",t&&Object.keys(t.contacts).map((function(s){return(0,h.jsx)(g,{contactTitle:s,contactValue:t.contacts[s]},s)}))]}),e&&(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:o,children:"Edit"})})]})},g=function(s){var t=s.contactTitle,e=s.contactValue;return(0,h.jsxs)("div",{className:u.contact,children:[(0,h.jsx)("b",{children:t}),": ",e]})},k=function(s){var t=s.profile,e=s.status,o=s.updateStatus,i=s.isOwner,n=s.savePhoto,r=s.saveProfile,a={backgroundImage:"url(".concat(b,")")},m=(0,l.useState)(!1),j=(0,c.Z)(m,2),v=j[0],g=j[1],k=(0,l.useRef)(null);return t?(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:u.descriptionBlock,children:[(0,h.jsx)("div",{style:a,className:u.backgroundPhoto}),(0,h.jsxs)("div",{className:u.descriptionContainer,children:[(0,h.jsxs)("div",{className:u.profileAvatarBox,children:[(0,h.jsx)("img",{src:t.photos.large||f,className:u.mainPhoto}),i&&(0,h.jsx)("div",{className:u.photoButton,onClick:function(){var s;k&&(null===(s=k.current)||void 0===s||s.click())},children:(0,h.jsx)("img",{src:x,alt:"photoicon"})}),(0,h.jsx)("input",{style:{display:"none"},ref:k,type:"file",accept:"image/*",onChange:function(s){s.target.files&&s.target.files.length&&n(s.target.files[0])}})]}),(0,h.jsx)(p,{status:e,updateStatus:o}),v?(0,h.jsx)(_,{initialValues:t,profile:t,onSubmit:function(s){r(s).then((function(){g(!1)}))}}):(0,h.jsx)(P,{goToEditMode:function(){g(!0)},profile:t,isOwner:i})]})]})}):(0,h.jsx)(d.Z,{})},N=e(81),y="MyPosts_postsBlock__kzn9Q",S="MyPosts_addPost__bwbK6",I="MyPosts_posts__kJmO-",A="MyPosts_addPostForm__h5sqz",C="Post_item__sNNxS",Z="Post_name__o2xUp",B="Post_message__ib5wt",M="Post_likes__OLeY6",w=function(s){return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:C,children:[(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("img",{src:f}),(0,h.jsx)("p",{children:s.name})]}),(0,h.jsx)("div",{className:B,children:(0,h.jsx)("p",{children:s.message})}),(0,h.jsx)("div",{className:M,children:(0,h.jsxs)("span",{children:["Likes:",s.likesCount]})})]})})},F=e(6139),D=e(3079),O=e(3923),E=(0,D.D)(10),T=(0,m.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,h.jsxs)("form",{onSubmit:s.handleSubmit,className:A,children:[(0,h.jsx)(F.Z,{component:j.gx,name:"newPostText",validate:[D.C,E]}),(0,h.jsx)("button",{children:"Add post"})]})})),J=function(s){var t=(0,O.C)((function(s){return s.auth.login})),e=s.posts.map((function(s){return(0,h.jsx)(w,{name:s.name,message:s.message,likesCount:s.likesCount},s.id)}));return(0,h.jsxs)("div",{className:y,children:[(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)(T,{onSubmit:function(e){s.addPost(e.newPostText,t)}})]}),(0,h.jsx)("div",{className:I,children:e})]})},G=e(364),q=(0,G.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(t,e){s((0,N.Mq)(t,e))}}}))(J),z=function(s){return(0,h.jsxs)("div",{children:[(0,h.jsx)(k,{profile:s.profile,status:s.status,updateStatus:s.updateStatus,isOwner:s.isOwner,savePhoto:s.savePhoto,saveProfile:s.saveProfile}),(0,h.jsx)(q,{})]})},L=e(9271),U=e(7781),K=e(2163),V=function(s){(0,r.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,n.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=String(this.props.authoraizedUserId))||this.props.history.push("/login"),this.props.getProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t,e){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(z,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),e}(l.Component),$=(0,U.qC)((0,G.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authoraizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getProfile:N.Ai,getStatus:N.lR,updateStatus:N.Nf,savePhoto:N.Ju,saveProfile:N.Ii}),L.EN,K.e)(V)},2163:function(s,t,e){e.d(t,{e:function(){return u}});var o=e(1413),i=e(5987),n=e(9271),r=(e(2791),e(364)),a=e(184),l=["isAuth"],c=function(s){return{isAuth:s.auth.isAuth}};function u(s){return(0,r.$j)(c)((function(t){var e=t.isAuth,r=(0,i.Z)(t,l);return e?(0,a.jsx)(s,(0,o.Z)({},r)):(0,a.jsx)(n.l_,{to:"/login"})}))}},7155:function(s,t,e){s.exports=e.p+"static/media/maldivy.4243f9351d71c3ba4127.jpg"}}]);
//# sourceMappingURL=797.9ba42d64.chunk.js.map