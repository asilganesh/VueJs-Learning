export default {
    template: `
<button 
:class="{
    'bg-grey-200 border rounded px-5 py-2 hover:bg-black-400 disabled:cursor-not-allowed':true,
    'bg-blue-600 ': type === 'primary',
    'bg-red-200 ': type === 'secondary',
    'bg-grey-200 ': type === 'muted',
    'is-loading' : processing,

}" 
:disabled="processing">
    <slot></slot>
</button>
`,

    props: {
        type: {
            type: String,
            default: "primary",
        },

    processing:{
        type : Boolean,
        default : false
    }
    },
    
};
