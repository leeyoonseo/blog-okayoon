import { App } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// * baseComponent / layoutComponent / component 형식으로 사용
const registComponents = (app: App) => {
  const commonComponent = require.context('@/components/', true, /[a-z]\w+\.vue$/);

  commonComponent.keys().forEach((file) => {
    const componentConfig = commonComponent(file);
    const prefix = file.replace('./', '').split('/').shift();
    const fileName = file.replace('.vue', '').split('/').pop();
    const componentName = upperFirst(camelCase(prefix !== 'template' ? `${prefix}/${fileName}` : fileName));
    app.component(componentName, componentConfig.default || componentConfig);
  });
};

export default registComponents;
