export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
    locales: string
    buildLocales: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    apiUrl: string
}

export interface BuildOptions {
    paths: BuildPaths
    mode: BuildMode
    isDev: boolean
    port: number
    apiUrl: string
    project: 'storybook' | 'frontend' | 'jest'
}
