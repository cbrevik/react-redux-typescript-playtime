import prodConfigStore from './configureStore.prod';
import devConfigStore from './configureStore.dev';

let configureStore : (initialState: any) => any;
// Use ProvidePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
    configureStore = prodConfigStore;
} else {
    configureStore = devConfigStore;
}

export default configureStore;