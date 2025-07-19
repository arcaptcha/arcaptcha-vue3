declare module 'arcaptcha-vue3'{
    import type { DefineComponent } from "vue";
    export interface ArcaptchaVue3Props{
        site_key: string,

        //Display options
        size?: 'normal' | 'invisible',
        theme?: 'light' | 'dark',
        color?: string,
        error_print?: 0 | 1,
        lang?: 'en' | 'fa',

        // Event Callbacks
        callback?: (token?: string) => void
        rendered_callback?: () => void
        error_callback?: () => void
        reset_callback?: () => void
        expired_callback?: () => void
        chlexpired_callback?: () => void
        blocked_callback?: () => void
        clicked_callback?: () => void
        opened_callback?: () => void
        closed_callback?: () => void
    }

    const arcaptcha: DefineComponent<ArcaptchaVue3Props>

    export default arcaptcha
}