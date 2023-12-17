import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-quality-control-отчет-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-quality-control-проверяемое+продукция':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'название',
            required: true,
            relationName: 'продукция',
            projection: 'ПродукцияL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
