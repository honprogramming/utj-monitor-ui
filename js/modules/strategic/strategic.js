/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(
        ['knockout',
            'view-models/admin/AdminItems',
            'ojs/ojcore', 'jquery', 'ojs/ojknockout',
            'ojs/ojcollapsible', 'ojs/ojinputtext',
            'ojs/ojtable', 'ojs/ojinputtext', 'ojs/ojarraytabledatasource'
        ],
        function (ko, AdminItems) {
            function StrategicViewModel() {
                var self = this;

                self.title = AdminItems["strategic"]["label"];
                self.visionLabel = "Visión";
                self.axesLabel = "Ejes";
                self.vision = ko.observable();
                self.placeholder = "La visión de la escuela...";

                self.dataSource = new oj.ArrayTableDataSource(
                        [
                            {
                                id: 1,
                                name: "Calidad Educativa"
                            },
                            {
                                id: 2,
                                name: "Formación integral y aprovechamiento académico"
                            },
                            {
                                id: 3,
                                name: "Planeación, administración, equidad y gobierno"
                            },
                            {
                                id: 4,
                                name: "Vinculación e incubación de empresas"
                            },
                            {
                                id: 5,
                                name: "Inovación y desarrollo tecnológico"
                            },
                            {
                                id: 6,
                                name: "Internacionalización e idiomas"
                            }
                        ],
                        {
                            idAttribute: "id"
                        }
                );

                self.columns = [
                    {
                        headerText: 'Nombre',
                        headerStyle: 'min-width: 90%; max-width: 90%; width: 90%',
                        headerClassName: 'oj-helper-text-align-start',
                        style: 'min-width: 90%; max-width: 90%; width: 90%;',
                        className: 'oj-helper-text-align-start',
                        sortProperty: 'name'
                    },
                    {
                        headerText: 'Acciones',
                        headerStyle: 'min-width: 10%; max-width: 10%; width: 10%',
                        headerClassName: 'oj-helper-text-align-start',
                        style: 'min-width: 10%; max-width: 10%; width: 10%;',
                        className: '',
                        sortable: 'disabled'
                    }
                ];

                self.getRowTemplate = function (data, context) {
                    var mode = context.$rowContext['mode'];

                    if (mode === 'edit') {
                        return 'editRowTemplate';
                    } else if (mode === 'navigation') {
                        return 'rowTemplate';
                    }
                };
            }

            return new StrategicViewModel();
        }
);