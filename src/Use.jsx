// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import {
// 	Autoformat,
// 	AutoImage,
// 	Autosave,
// 	BlockQuote,
// 	Bold,
// 	ClassicEditor,
// 	CloudServices,
// 	Essentials,
// 	Heading,
// 	ImageBlock,
// 	ImageCaption,
// 	ImageInline,
// 	ImageInsert,
// 	ImageResize,
// 	ImageStyle,
// 	ImageTextAlternative,
// 	ImageToolbar,
// 	ImageUpload,
// 	Indent,
// 	IndentBlock,
// 	Italic,
// 	Link,
// 	List,
// 	MediaEmbed,
// 	Paragraph,
// 	PasteFromOffice,
// 	Table,
// 	TableCaption,
// 	TableCellProperties,
// 	TableColumnResize,
// 	TableProperties,
// 	TableToolbar,
// 	TextTransformation,
// 	TodoList,
// 	Underline
// } from 'ckeditor5';
// import { useEffect, useMemo, useRef, useState } from 'react';

// import 'ckeditor5/ckeditor5.css';

// import Home from './Home';

// const LICENSE_KEY =
//   'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Mzg3MTM1OTksImp0aSI6ImZkMGRlMjhkLTU1MzQtNDhmMC1hZjZkLTJlMWVkY2ZhMzdiNCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijc2Nzc3NzgxIn0.7qC0IveA59MR_xlZsypq32Hle95gbCrzrlhIujiCloXP9e_JLcoScD7T6pqeaQCRFo8q61U7xdj7HdcC9gnUeA';

// const CLOUD_SERVICES_TOKEN_URL =
//   'https://g61uox3dea0o.cke-cs.com/token/dev/5ada4c40b035762b5fe8fdb95e8708995d178b020a564101e03d016dcee2?limit=10';

// export default function App() {
//   const editorContainerRef = useRef(null);
//   const editorRef = useRef(null);
//   const [isLayoutReady, setIsLayoutReady] = useState(false);

//   useEffect(() => {
//     setIsLayoutReady(true);
//     return () => setIsLayoutReady(false);
//   }, []);

//   const { editorConfig } = useMemo(() => {
//     if (!isLayoutReady) {
//       return {};
//     }

//     return {
//       editorConfig: {
//         toolbar: {
//           items: [
//             'heading',
//             '|',
//             'bold',
//             'italic',
//             'underline',
//             '|',
//             'link',
//             'insertImage',
//             'mediaEmbed',
//             'insertTable',
//             'blockQuote',
//             '|',
//             'bulletedList',
//             'numberedList',
//             'todoList',
//             'outdent',
//             'indent'
//           ],
//           shouldNotGroupWhenFull: false
//         },
//         plugins: [
//           Autoformat,
//           AutoImage,
//           Autosave,
//           BlockQuote,
//           Bold,
//           CloudServices,
//           Essentials,
//           Heading,
//           ImageBlock,
//           ImageCaption,
//           ImageInline,
//           ImageInsert,
//           ImageResize,
//           ImageStyle,
//           ImageTextAlternative,
//           ImageToolbar,
//           ImageUpload,
//           Indent,
//           IndentBlock,
//           Italic,
//           Link,
//           List,
//           MediaEmbed,
//           Paragraph,
//           PasteFromOffice,
//           Table,
//           TableCaption,
//           TableCellProperties,
//           TableColumnResize,
//           TableProperties,
//           TableToolbar,
//           TextTransformation,
//           TodoList,
//           Underline
//         ],
//         cloudServices: {
//           tokenUrl: CLOUD_SERVICES_TOKEN_URL
//         },
//         heading: {
//           options: [
//             { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//             { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
//             { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
//             { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
//             { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
//             { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
//             { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
//           ]
//         },
//         image: {
//           toolbar: [
//             'toggleImageCaption',
//             'imageTextAlternative',
//             '|',
//             'imageStyle:inline',
//             'imageStyle:wrapText',
//             'imageStyle:breakText',
//             '|',
//             'resizeImage',
//             '|',
//             'ckboxImageEdit'
//           ]
//         },
//         initialData: '<h2>Welcome to the CKEditor 5 Editor!</h2>',
//         licenseKey: LICENSE_KEY,
//         link: {
//           addTargetToExternalLinks: true,
//           defaultProtocol: 'https://',
//           decorators: {
//             toggleDownloadable: {
//               mode: 'manual',
//               label: 'Downloadable',
//               attributes: { download: 'file' }
//             }
//           }
//         },
//         list: {
//           properties: { styles: true, startIndex: true, reversed: true }
//         },
//         placeholder: 'Type or paste your content here!',
//         table: {
//           contentToolbar: [
//             'tableColumn',
//             'tableRow',
//             'mergeTableCells',
//             'tableProperties',
//             'tableCellProperties'
//           ]
//         }
//       }
//     };
//   }, [isLayoutReady]);

//   useEffect(() => {
//     if (editorConfig) {
//       configUpdateAlert(editorConfig);
//     }
//   }, [editorConfig]);

//   return (
//     <div className="main-container">
//       <div className="editor-container" ref={editorContainerRef}>
//         <div className="editor-container__editor">
//           <div ref={editorRef}>
//             {editorConfig && <CKEditor editor={ClassicEditor} config={editorConfig} />}
//           </div>
//         </div>
//       </div>
//       <Home />
//     </div>
//   );
// }

// function configUpdateAlert(config) {
//   if (configUpdateAlert.configUpdateAlertShown) {
//     return;
//   }

//   const isModifiedByUser = (currentValue, forbiddenValue) => {
//     if (currentValue === forbiddenValue || currentValue === undefined) {
//       return false;
//     }
//     return true;
//   };

//   const valuesToUpdate = [];

//   configUpdateAlert.configUpdateAlertShown = true;

//   if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
//     valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
//   }

//   if (valuesToUpdate.length) {
//     window.alert(
//       ['Please update the following values in your editor config', 'to receive full access to Premium Features:', '', ...valuesToUpdate.map(value => ` - ${value}`)].join('\n')
//     );
//   }
// }
