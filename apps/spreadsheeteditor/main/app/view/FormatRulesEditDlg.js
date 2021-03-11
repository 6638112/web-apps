/*
 *
 * (c) Copyright Ascensio System SIA 2010-2020
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-12 Ernesta Birznieka-Upisha
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
*/
/**
 *
 *  FormatRulesEditDlg.js
 *
 *  Created by Julia.Radzhabova on 15.04.20
 *  Copyright (c) 2020 Ascensio System SIA. All rights reserved.
 *  
 */

define([
    'common/main/lib/view/AdvancedSettingsWindow',
    'common/main/lib/component/ComboBox',
    'common/main/lib/component/InputField'
], function () {
    'use strict';

    SSE.Views = SSE.Views || {};

    SSE.Views.FormatRulesEditDlg =  Common.Views.AdvancedSettingsWindow.extend(_.extend({
        options: {
            alias: 'FormatRulesEditDlg',
            contentWidth: 490,
            height: 445
        },

        initialize: function (options) {
            var me = this;
            
            _.extend(this.options, {
                title: this.txtTitleNew,
                template: [
                    '<div class="box" style="height:' + (me.options.height - 85) + 'px;">',
                        '<div class="content-panel" style="padding: 0;"><div class="inner-content">',
                            '<div class="settings-panel active">',
                                '<table cols="1" style="width: 100%;">',
                                    '<tr>',
                                        '<td class="padding-small">',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;vertical-align: top;">',
                                                '<label class="header">', me.textRule,'</label>',
                                                '<div id="format-rules-edit-combo-category" class="input-group-nr"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="hasformat">',
                                        '<td class="padding-large">',
                                            '<div id="format-rules-edit-combo-rule" class="input-group-nr" style="display: inline-block;vertical-align: top;margin-right: 10px;"></div>',
                                            '<div id="format-rules-edit-txt-r1" class="input-row" style="display: inline-block;vertical-align: top;margin-right: 10px;"></div>',
                                            '<div id="format-rules-edit-txt-r2" class="input-row" style="display: inline-block;vertical-align: top;"></div>',
                                            '<div id="format-rules-edit-spin-rank" class="input-row" style="display: inline-block;vertical-align: top;margin-right: 10px;"></div>',
                                            '<div id="format-rules-edit-combo-percent" class="input-row" style="display: inline-block;vertical-align: top;"></div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="hasformat">',
                                        '<td class="padding-small">',
                                            '<label class="header">', me.textFormat,'</label>',
                                            '<div>',
                                                '<div id="format-rules-format-preset" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="hasformat">',
                                        '<td class="padding-large">',
                                            '<div>',
                                                '<div id="format-rules-bold" style="display: inline-block;"></div>','<div id="format-rules-italic" style="display: inline-block;margin-left: 5px;"></div>',
                                                '<div id="format-rules-underline" style="display: inline-block;margin-left: 5px;"></div>','<div id="format-rules-strikeout" style="display: inline-block;margin-left: 5px;"></div>',
                                                '<div id="format-rules-fontcolor" style="display: inline-block;margin-left: 5px;"></div>','<div id="format-rules-fillcolor" style="display: inline-block;margin-left: 5px;"></div>',
                                                '<div id="format-rules-borders" style="display: inline-block;margin-left: 5px;"></div>',
                                                '<div id="format-rules-edit-combo-num-format" class="input-group-nr" style="display: inline-block;vertical-align: middle;margin-left: 5px;"></div>',
                                                '<button type="button" class="btn btn-text-default auto" id="format-rules-edit-btn-clear" style="display: inline-block;vertical-align: middle;margin-left: 10px;min-width: 80px;">', me.textClear, '</button>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="hasformat">',
                                        '<td class="padding-small">',
                                            '<label class="header">', me.textPreview,'</label>',
                                            '<div style="border: 1px solid #cbcbcb;width: 150px; height: 40px; padding: 3px;">',
                                                '<div id="format-rules-edit-preview-format" style="width: 100%; height: 100%; position: relative; margin: 0 auto;"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="scale">',
                                        '<td class="padding-large" style="padding-top: 8px;">',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;vertical-align: top;">',
                                                '<label style="display: block;">', me.textMinpoint,'</label>',
                                                '<div id="format-rules-edit-combo-scale-1" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-txt-scale-1" class="" style="height: 22px;margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-color-scale-1" style=""></div>',
                                            '</div>',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;">',
                                                '<label id="format-rules-edit-lbl-scale-2" style="display: block;">', me.textMidpoint,'</label>',
                                                '<div id="format-rules-edit-combo-scale-2" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-txt-scale-2" class="" style="height: 22px;margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-color-scale-2" style=""></div>',
                                            '</div>',
                                            '<div style="width:150px; display: inline-block;">',
                                                '<label style="display: block;">', me.textMaxpoint,'</label>',
                                                '<div id="format-rules-edit-combo-scale-3" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-txt-scale-3" class="" style="height: 22px;margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-color-scale-3" style=""></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="scale">',
                                        '<td colspan="3" class="padding-small">',
                                            '<label class="header">', me.textPreview,'</label>',
                                            '<div style="border: 1px solid #cbcbcb;width: 100%; height: 40px; padding: 3px;">',
                                                '<div id="format-rules-edit-preview-scale" style="width: 100%; height: 100%; position: relative; margin: 0 auto;"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="databar">',
                                        '<td class="padding-large" style="padding-top: 8px;">',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;vertical-align: top;">',
                                                '<label style="display: block;">', me.textMinimum,'</label>',
                                                '<div id="format-rules-edit-combo-bar-1" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-txt-bar-1" class="" style="height: 22px;"></div>',
                                            '</div>',
                                            '<div style="width:150px; display: inline-block;">',
                                                '<label style="display: block;">', me.textMaximum,'</label>',
                                                '<div id="format-rules-edit-combo-bar-2" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-txt-bar-2" class="" style="height: 22px;"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="databar">',
                                        '<td class="" style="padding-bottom: 4px;">',
                                            '<label class="header">', me.textAppearance,'</label>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="databar">',
                                        '<td class="padding-large" style="">',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;vertical-align: top;">',
                                                '<label style="display: block;">', me.textFill,'</label>',
                                                '<div id="format-rules-edit-combo-fill" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div style="width: 100%;margin-bottom: 4px;height: 23px;">',
                                                    '<label style="margin-top: 4px;">', me.textPositive,'</label>',
                                                    '<div id="format-rules-edit-color-pos-fill" style="float: right;"></div>',
                                                '</div>',
                                                '<div style="width: 100%;margin-bottom: 8px;height: 23px;">',
                                                    '<label style="margin-top: 4px;">', me.textNegative,'</label>',
                                                    '<div id="format-rules-edit-color-neg-fill" style="float: right;"></div>',
                                                '</div>',
                                                '<div id="format-rules-edit-chk-fill" style=""></div>',
                                            '</div>',
                                            '<div style="width:150px; display: inline-block; margin-right: 10px;vertical-align: top;">',
                                                '<label style="display: block;">', me.textBorder,'</label>',
                                                '<div id="format-rules-edit-combo-border" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div style="width: 100%;margin-bottom: 4px;height: 23px;">',
                                                    '<label style="margin-top: 4px;">', me.textPositive,'</label>',
                                                    '<div id="format-rules-edit-color-pos-border" style="float: right;"></div>',
                                                '</div>',
                                                '<div style="width: 100%;margin-bottom: 8px;height: 23px;">',
                                                    '<label style="margin-top: 4px;">', me.textNegative,'</label>',
                                                    '<div id="format-rules-edit-color-neg-border" style="float: right;"></div>',
                                                '</div>',
                                                '<div id="format-rules-edit-chk-border" style=""></div>',
                                            '</div>',
                                            '<div style="width:150px; display: inline-block;vertical-align: top;">',
                                                '<label style="display: block;">', me.textBarDirection,'</label>',
                                                '<div id="format-rules-edit-combo-direction" class="input-group-nr" style="margin-bottom: 8px;"></div>',
                                                '<div id="format-rules-edit-chk-show-bar" style="margin-top: 12px;"></div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="databar">',
                                        '<td class="padding-small">',
                                            '<div style="float:left;">',
                                                '<label class="header" style="display: block;">', me.textAxis,'</label>',
                                                '<label style="margin-right: 10px;margin-top: 1px;vertical-align: middle;">', me.textPosition,'</label>',
                                                '<div id="format-rules-edit-combo-axis-pos" class="input-group-nr" style="margin-right: 10px;display: inline-block;vertical-align: middle;"></div>',
                                                '<div id="format-rules-edit-color-axis-color" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</div>',
                                            '<div style="float:right; width: 155px;">',
                                                '<label class="header" style="display: block;">', me.textPreview,'</label>',
                                                '<div style="border: 1px solid #cbcbcb;width: 150px; height: 40px; padding: 3px;">',
                                                    '<div id="format-rules-edit-preview-databar" style="width: 100%; height: 100%; position: relative; margin: 0 auto;"></div>',
                                                '</div>',
                                            '</div>',
                                        '</td>',
                                    '</tr>',
                                    '<tr class="iconset">',
                                    '<td>',
                                        '<table>',
                                        '<tr>',
                                            '<td class="padding-large" style="padding-top: 8px;">',
                                                '<label class="header">', me.textIconStyle,'</label>',
                                                '<div>',
                                                    '<div id="format-rules-icon-style" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                                    '<div id="format-rules-edit-chk-icon-show" style="margin-left: 10px;display: inline-block;vertical-align: middle;"></div>',
                                                    '<button type="button" class="btn btn-text-default auto" id="format-rules-edit-btn-icon-reverse" style="float:right; display: inline-block;">', me.textReverse, '</button>',
                                                '</div>',
                                            '</td>',
                                        '</tr>',
                                        '<tr class="icons-5">',
                                            '<td class="padding-small">',
                                                '<div id="format-rules-combo-icon-5" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-txt-icon-5" class="iconset-label" style="display: inline-block;vertical-align: middle;margin-right: 10px;width: 140px;"></div>',
                                                '<div id="format-rules-edit-combo-op-5" class="input-group-nr" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-txt-value-5" class="" style="display: inline-block;height: 22px;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-combo-type-5" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</td>',
                                        '</tr>',
                                        '<tr class="icons-4">',
                                            '<td class="padding-small">',
                                                '<div id="format-rules-combo-icon-4" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-txt-icon-4" class="iconset-label" style="display: inline-block;vertical-align: middle;margin-right: 10px;width: 140px;"></div>',
                                                '<div id="format-rules-edit-combo-op-4" class="input-group-nr" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-txt-value-4" class="" style="display: inline-block;height: 22px;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-combo-type-4" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</td>',
                                        '</tr>',
                                        '<tr class="icons-3">',
                                            '<td class="padding-small">',
                                                '<div id="format-rules-combo-icon-3" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-txt-icon-3" class="iconset-label" style="display: inline-block;vertical-align: middle;margin-right: 10px;width: 140px;"></div>',
                                                '<div id="format-rules-edit-combo-op-3" class="input-group-nr" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-txt-value-3" class="" style="display: inline-block;height: 22px;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-combo-type-3" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</td>',
                                        '</tr>',
                                        '<tr class="icons-2">',
                                            '<td class="padding-small">',
                                                '<div id="format-rules-combo-icon-2" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-txt-icon-2" class="iconset-label" style="display: inline-block;vertical-align: middle;margin-right: 10px;width: 140px;"></div>',
                                                '<div id="format-rules-edit-combo-op-2" class="input-group-nr" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-txt-value-2" class="" style="display: inline-block;height: 22px;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-combo-type-2" class="input-group-nr" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</td>',
                                        '</tr>',
                                        '<tr class="icons-1">',
                                            '<td class="padding-small">',
                                                '<div id="format-rules-combo-icon-1" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-txt-icon-1" class="iconset-label" style="display: inline-block;vertical-align: middle;margin-right: 10px;width: 140px;"></div>',
                                                '<div id="format-rules-edit-combo-op-1" class="input-group-nr hidden" style="display: inline-block;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-txt-value-1" class=" hidden" style="display: inline-block;height: 22px;vertical-align: middle;margin-right: 10px;"></div>',
                                                '<div id="format-rules-edit-combo-type-1" class="input-group-nr hidden" style="display: inline-block;vertical-align: middle;"></div>',
                                            '</td>',
                                        '</tr>',
                                        '</table>',
                                    '</td>',
                                    '</tr>',
                                '</table>',
                            '</div></div>',
                        '</div>',
                    '</div>',
                    '<div class="separator horizontal"></div>'
                ].join('')
            }, options);

            this.api        = options.api;
            this.handler    = options.handler;
            this.isEdit     = options.isEdit || false;
            this.props      = options.props;
            this.type       = options.type; // rule category
            this.subtype    = options.subtype; // rule
            this.langId     = options.langId; // rule

            Common.Views.AdvancedSettingsWindow.prototype.initialize.call(this, this.options);
        },
        render: function () {
            Common.Views.AdvancedSettingsWindow.prototype.render.call(this);
            var me = this;

            var rules = [
                {
                    name: this.textValue,
                    type: Asc.c_oAscCFType.cellIs,
                    rules: [
                        { name: Common.define.conditionalData.textGreater, subtype: Asc.c_oAscCFOperator.greaterThan},
                        { name: Common.define.conditionalData.textGreaterEq, subtype: Asc.c_oAscCFOperator.greaterThanOrEqual},
                        { name: Common.define.conditionalData.textLess, subtype: Asc.c_oAscCFOperator.lessThan},
                        { name: Common.define.conditionalData.textLessEq, subtype: Asc.c_oAscCFOperator.lessThanOrEqual},
                        { name: Common.define.conditionalData.textEqual, subtype: Asc.c_oAscCFOperator.equal},
                        { name: Common.define.conditionalData.textNotEqual, subtype: Asc.c_oAscCFOperator.notEqual},
                        { name: Common.define.conditionalData.textBetween, subtype: Asc.c_oAscCFOperator.between},
                        { name: Common.define.conditionalData.textNotBetween, subtype: Asc.c_oAscCFOperator.notBetween}
                    ]
                },
                {
                    name: this.textRanked,
                    type: Asc.c_oAscCFType.top10,
                    rules: [
                        { name: Common.define.conditionalData.textTop, subtype: 0},
                        { name: Common.define.conditionalData.textBottom, subtype: 1}
                    ]
                },
                {
                    name: Common.define.conditionalData.textAverage,
                    type: Asc.c_oAscCFType.aboveAverage,
                    rules: [
                        { name: Common.define.conditionalData.textAbove, subtype: 0},
                        { name: Common.define.conditionalData.textBelow, subtype: 1},
                        { name: Common.define.conditionalData.textEqAbove, subtype: 2},
                        { name: Common.define.conditionalData.textEqBelow, subtype: 3},
                        { name: Common.define.conditionalData.text1Above, subtype: 4},
                        { name: Common.define.conditionalData.text1Below, subtype: 5},
                        { name: Common.define.conditionalData.text2Above, subtype: 6},
                        { name: Common.define.conditionalData.text2Below, subtype: 7},
                        { name: Common.define.conditionalData.text3Above, subtype: 8},
                        { name: Common.define.conditionalData.text3Below, subtype: 9}
                    ]
                },
                {
                    name: Common.define.conditionalData.textText,
                    type: Asc.c_oAscCFType.containsText,
                    rules: [
                        { name: Common.define.conditionalData.textContains,   type: Asc.c_oAscCFType.containsText },
                        { name: Common.define.conditionalData.textNotContains,   type: Asc.c_oAscCFType.notContainsText },
                        { name: Common.define.conditionalData.textBegins,   type: Asc.c_oAscCFType.beginsWith },
                        { name: Common.define.conditionalData.textEnds,   type: Asc.c_oAscCFType.endsWith }
                    ]
                },
                {
                    name: Common.define.conditionalData.textDate,
                    type: Asc.c_oAscCFType.timePeriod,
                    rules: [
                        { name: Common.define.conditionalData.textYesterday, subtype: Asc.c_oAscTimePeriod.yesterday},
                        { name: Common.define.conditionalData.textToday, subtype: Asc.c_oAscTimePeriod.today},
                        { name: Common.define.conditionalData.textTomorrow, subtype: Asc.c_oAscTimePeriod.tomorrow},
                        { name: Common.define.conditionalData.textLast7days, subtype: Asc.c_oAscTimePeriod.last7Days},
                        { name: Common.define.conditionalData.textLastWeek, subtype: Asc.c_oAscTimePeriod.lastWeek},
                        { name: Common.define.conditionalData.textThisWeek, subtype: Asc.c_oAscTimePeriod.thisWeek},
                        { name: Common.define.conditionalData.textNextWeek, subtype: Asc.c_oAscTimePeriod.nextWeek},
                        { name: Common.define.conditionalData.textLastMonth, subtype: Asc.c_oAscTimePeriod.lastMonth},
                        { name: Common.define.conditionalData.textThisMonth, subtype: Asc.c_oAscTimePeriod.thisMonth},
                        { name: Common.define.conditionalData.textNextMonth, subtype: Asc.c_oAscTimePeriod.nextMonth}
                    ]
                },
                {
                    name: Common.define.conditionalData.textBlank + '/' + Common.define.conditionalData.textError,
                    type: Asc.c_oAscCFType.containsBlanks,
                    rules: [
                        { name: Common.define.conditionalData.textBlanks,   type: Asc.c_oAscCFType.containsBlanks },
                        { name: Common.define.conditionalData.textNotBlanks,   type: Asc.c_oAscCFType.notContainsBlanks },
                        { name: Common.define.conditionalData.textErrors,   type: Asc.c_oAscCFType.containsErrors },
                        { name: Common.define.conditionalData.textNotErrors,   type: Asc.c_oAscCFType.notContainsErrors }
                    ]
                },
                {
                    name: Common.define.conditionalData.textDuplicate + '/' + Common.define.conditionalData.textUnique,
                    type: Asc.c_oAscCFType.duplicateValues,
                    rules: [
                        { name: Common.define.conditionalData.textDuplicate,   type: Asc.c_oAscCFType.duplicateValues },
                        { name: Common.define.conditionalData.textUnique,   type: Asc.c_oAscCFType.uniqueValues }
                    ]
                },
                {
                    name: this.text2Scales,
                    type: Asc.c_oAscCFType.colorScale,
                    num: 2
                },
                {
                    name: this.text3Scales,
                    type: Asc.c_oAscCFType.colorScale,
                    num: 3
                },
                {
                    name: Common.define.conditionalData.textDataBar,
                    type: Asc.c_oAscCFType.dataBar
                },
                {
                    name: Common.define.conditionalData.textIconSets,
                    type: Asc.c_oAscCFType.iconSet
                },
                {
                    name: Common.define.conditionalData.textFormula,
                    type: Asc.c_oAscCFType.expression
                }
            ];
            var arrrules = [],
                cmbData = [];
            _.each(rules, function(rule, index){
                var arr = [];

                rule.rules && _.each(rule.rules, function(item, idx){
                    arr.push({
                        name     : item.name,
                        type     : item.type,
                        subtype  : item.subtype,
                        allowSelected : true,
                        selected: false
                    });
                });
                var store = new Backbone.Collection(arr);
                arrrules.push({
                    name   : rule.name,
                    type   : rule.type,
                    rules  : store,
                    num    : rule.num,
                    index  : index
                });
                cmbData.push({value: index, displayValue: rule.name});
            });
            this.ruleStore = new Backbone.Collection(arrrules);

            // this.txtScope = new Common.UI.InputFieldBtn({
            //     el          : $('#format-rules-edit-txt-scope'),
            //     name        : 'range',
            //     style       : 'width: 150px;',
            //     allowBlank  : true,
            //     btnHint     : this.textSelectData,
            //     validateOnChange: false
            // });
            // this.txtScope.on('button:click', _.bind(this.onSelectData, this));

            this.cmbCategory = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-category'),
                style       : 'width: 150px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : cmbData
            }).on('selected', function(combo, record) {
                me.refreshRules(record.value);
            });

            this.cmbRule = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-rule'),
                style       : 'width: 150px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : []
            }).on('selected', function(combo, record) {
                me.setControls(me.cmbCategory.getValue(), record.value);
            });

            this.txtRange1 = new Common.UI.InputFieldBtn({
                el          : $('#format-rules-edit-txt-r1'),
                name        : 'range',
                style       : 'width: 150px;',
                allowBlank  : true,
                btnHint     : this.textSelectData,
                validateOnChange: false
            });
            this.txtRange1.on('button:click', _.bind(this.onSelectData, this));
            
            this.txtRange2 = new Common.UI.InputFieldBtn({
                el          : $('#format-rules-edit-txt-r2'),
                name        : 'range',
                style       : 'width: 150px;',
                allowBlank  : true,
                btnHint     : this.textSelectData,
                validateOnChange: false
            });
            this.txtRange2.on('button:click', _.bind(this.onSelectData, this));

            // top 10
            this.cmbPercent = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-percent'),
                style       : 'width: 100px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : [
                    {value: 0, displayValue: this.textItem},
                    {value: 1, displayValue: this.textPercent}
                ]
            }).on('selected', function(combo, record) {
                var percent = !!record.value;
                // me.numRank.setMaxValue(percent ? 100 : 1000);
                me.numRank.setValue(me.numRank.getNumberValue());
            });
            this.cmbPercent.setValue(0);

            this.numRank = new Common.UI.MetricSpinner({
                el: $('#format-rules-edit-spin-rank'),
                step: 1,
                width: 100,
                defaultUnit : "",
                defaultValue : 10,
                allowDecimal: false,
                value: '10',
                maxValue: 1000000000000,
                minValue: -1000000000000
            });
            this.numRank.on('change', _.bind(function(field, newValue, oldValue, eOpts){
            }, this));

            // Format
            var presets = this.api.asc_getCFPresets();
            var formatPresets = presets[Asc.c_oAscCFRuleTypeSettings.format];
            var color_data = [];
            _.each(formatPresets, function(preset, index){
                color_data.push({
                    value: index,
                    fontColor: preset[0],
                    fillColor: preset[1],
                    borderColor: preset[2],
                    displayValue: preset[0] ? Common.define.conditionalData.exampleText : '',
                    styleObj: {'background-color': preset[1] ? '#' + preset[1] : 'transparent', color: preset[0] ? '#' + preset[0] : 'transparent', border: preset[2] ? '1px solid #' + preset[2] : '', 'text-align': 'center' },
                    styleStr: 'background-color: ' + (preset[1] ? '#' + preset[1] : 'transparent') + ';color:'  + (preset[0] ? '#' + preset[0] : 'transparent') + ';' + (preset[2] ? 'border: 1px solid #' + preset[2] + ';' : '' + 'text-align: center;')
                });
            });

            this.cmbFormats = new Common.UI.ComboBoxColor({
                el          : $('#format-rules-format-preset'),
                editable    : false,
                style       : 'width: 150px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                data        : color_data
            });
            this.cmbFormats.setValue(this.textCustom);
            this.cmbFormats.on('selected', _.bind(this.onFormatsSelect, this));

            this.btnBold = new Common.UI.Button({
                parentEl: $('#format-rules-bold'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-bold',
                enableToggle: true,
                hint: this.textBold
            });
            this.btnBold.on('click', _.bind(this.onBoldClick, this));

            this.btnItalic = new Common.UI.Button({
                parentEl: $('#format-rules-italic'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-italic',
                enableToggle: true,
                hint: this.textItalic
            });
            this.btnItalic.on('click', _.bind(this.onItalicClick, this));

            this.btnUnderline = new Common.UI.Button({
                parentEl: $('#format-rules-underline'),
                cls         : 'btn-toolbar',
                iconCls     : 'toolbar__icon btn-underline',
                enableToggle: true,
                hint: this.textUnderline
            });
            this.btnUnderline.on('click', _.bind(this.onUnderlineClick, this));

            this.btnStrikeout = new Common.UI.Button({
                parentEl: $('#format-rules-strikeout'),
                cls: 'btn-toolbar',
                iconCls: 'toolbar__icon btn-strikeout',
                enableToggle: true,
                hint: this.textStrikeout
            });
            this.btnStrikeout.on('click',_.bind(this.onStrikeoutClick, this));

            var initNewColor = function(btn, picker_el, transparent) {
                if (btn && btn.cmpEl) {
                    btn.currentColor = '#000000';
                    btn.setColor(btn.currentColor);
                    var picker = new Common.UI.ThemeColorPalette({
                        el: $(picker_el),
                        transparent: transparent
                    });
                    picker.currentColor = btn.currentColor;
                }
                btn.menu.cmpEl.on('click', picker_el+'-new', _.bind(function() {
                    picker.addNewColor((typeof(btn.color) == 'object') ? btn.color.color : btn.color);
                }, me));
                return picker;
            };

            this.btnTextColor = new Common.UI.ButtonColored({
                parentEl: $('#format-rules-fontcolor'),
                cls         : 'btn-toolbar',
                iconCls     : 'toolbar__icon btn-fontcolor',
                hint        : this.textColor,
                split       : true,
                menu        : new Common.UI.Menu({
                    additionalAlign: this.menuAddAlign,
                    items: [
                        { template: _.template('<div id="format-rules-menu-fontcolor" style="width: 169px; height: 220px; margin: 10px;"></div>') },
                        { template: _.template('<a id="format-rules-menu-fontcolor-new" style="padding-left:12px;">' + this.textNewColor + '</a>') }
                    ]
                })
            });
            this.mnuTextColorPicker = initNewColor(this.btnTextColor, "#format-rules-menu-fontcolor");
            this.mnuTextColorPicker.on('select', _.bind(me.onFormatTextColorSelect, me));
            this.btnTextColor.on('click', _.bind(me.onFormatTextColor, me));

            this.btnFillColor = new Common.UI.ButtonColored({
                parentEl: $('#format-rules-fillcolor'),
                cls         : 'btn-toolbar',
                iconCls     : 'toolbar__icon btn-paracolor',
                hint        : this.fillColor,
                split       : true,
                menu        : new Common.UI.Menu({
                    additionalAlign: this.menuAddAlign,
                    items: [
                        { template: _.template('<div id="format-rules-menu-fillcolor" style="width: 169px; height: 220px; margin: 10px;"></div>') },
                        { template: _.template('<a id="format-rules-menu-fillcolor-new" style="padding-left:12px;">' + this.textNewColor + '</a>') }
                    ]
                })
            });
            this.mnuFillColorPicker = initNewColor(this.btnFillColor, "#format-rules-menu-fillcolor", true);
            this.mnuFillColorPicker.on('select', _.bind(me.onFormatFillColorSelect, me));
            this.btnFillColor.on('click', _.bind(me.onFormatFillColor, me));

            this.btnBorders = new Common.UI.Button({
                parentEl    : $('#format-rules-borders'),
                cls         : 'btn-toolbar',
                iconCls     : 'toolbar__icon btn-border-out',
                hint        : this.tipBorders,
                icls        : 'btn-border-out',
                borderId    : 'outer',
                borderswidth: Asc.c_oAscBorderStyles.Thin,
                split       : true,
                menu        : new Common.UI.Menu({
                    items: [
                        {
                            caption     : this.textOutBorders,
                            iconCls     : 'menu__icon btn-border-out',
                            icls        : 'btn-border-out',
                            borderId    : 'outer'
                        },
                        {
                            caption     : this.textAllBorders,
                            iconCls     : 'menu__icon btn-border-all',
                            icls        : 'btn-border-all',
                            borderId    : 'all'
                        },
                        {
                            caption     : this.textTopBorders,
                            iconCls     : 'menu__icon btn-border-top',
                            icls        : 'btn-border-top',
                            borderId    : Asc.c_oAscBorderOptions.Top
                        },
                        {
                            caption     : this.textBottomBorders,
                            iconCls     : 'menu__icon btn-border-bottom',
                            icls        : 'btn-border-bottom',
                            borderId    : Asc.c_oAscBorderOptions.Bottom
                        },
                        {
                            caption     : this.textLeftBorders,
                            iconCls     : 'menu__icon btn-border-left',
                            icls        : 'btn-border-left',
                            borderId    : Asc.c_oAscBorderOptions.Left
                        },
                        {
                            caption     : this.textRightBorders,
                            iconCls     : 'menu__icon btn-border-right',
                            icls        : 'btn-border-right',
                            borderId    : Asc.c_oAscBorderOptions.Right
                        },
                        {
                            caption     : this.textNoBorders,
                            iconCls     : 'menu__icon btn-border-no',
                            icls        : 'btn-border-no',
                            borderId    : 'none'
                        },
                        {caption: '--'},
                        {
                            caption     : this.textInsideBorders,
                            iconCls     : 'menu__icon btn-border-inside',
                            icls        : 'btn-border-center',
                            borderId    : 'inner'
                        },
                        {
                            caption     : this.textCenterBorders,
                            iconCls     : 'menu__icon btn-border-insidevert',
                            icls        : 'btn-border-vmiddle',
                            borderId    : Asc.c_oAscBorderOptions.InnerV
                        },
                        {
                            caption     : this.textMiddleBorders,
                            iconCls     : 'menu__icon btn-border-insidehor',
                            icls        : 'btn-border-hmiddle',
                            borderId    : Asc.c_oAscBorderOptions.InnerH
                        },
                        {
                            caption     : this.textDiagUpBorder,
                            iconCls     : 'menu__icon btn-border-diagup',
                            icls        : 'btn-border-diagup',
                            borderId    : Asc.c_oAscBorderOptions.DiagU
                        },
                        {
                            caption     : this.textDiagDownBorder,
                            iconCls     : 'menu__icon btn-border-diagdown',
                            icls        : 'btn-border-diagdown',
                            borderId    : Asc.c_oAscBorderOptions.DiagD
                        },
                        {caption: '--'},
                        {
                            id          : 'format-rules-borders-border-width',
                            caption     : this.textBordersStyle,
                            iconCls     : 'menu__icon btn-border-style',
                            menu        : (function(){
                                var itemTemplate = _.template('<a id="<%= id %>" tabindex="-1" type="menuitem"><div class="border-size-item" style="background-position: 0 -<%= options.offsety %>px;"></div></a>');
                                me.mnuBorderWidth = new Common.UI.Menu({
                                    style       : 'min-width: 100px;',
                                    menuAlign   : 'tl-tr',
                                    items: [
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Thin ,   offsety: 0, checked:true},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Hair,   offsety: 20},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Dotted,   offsety: 40},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Dashed,   offsety: 60},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.DashDot,   offsety: 80},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.DashDotDot,   offsety: 100},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Medium, offsety: 120},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.MediumDashed,  offsety: 140},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.MediumDashDot,  offsety: 160},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.MediumDashDotDot,  offsety: 180},
                                        { template: itemTemplate, stopPropagation: true, checkable: true, toggleGroup: 'border-width', value: Asc.c_oAscBorderStyles.Thick,  offsety: 200}
                                    ]
                                });

                                return me.mnuBorderWidth;
                            })()
                        },
                        this.mnuBorderColor = new Common.UI.MenuItem({
                            id          : 'format-rules-borders-border-color',
                            caption     : this.textBordersColor,
                            iconCls     : 'mnu-icon-item mnu-border-color',
                            template    : _.template('<a id="<%= id %>" tabindex="-1" type="menuitem"><span class="menu-item-icon" style="background-image: none; width: 12px; height: 12px; margin: 2px 9px 0 -11px; border-style: solid; border-width: 3px; border-color: #000;"></span><%= caption %></a>'),
                            menu        : new Common.UI.Menu({
                                menuAlign   : 'tl-tr',
                                items       : [
                                    { template: _.template('<div id="format-rules-borders-menu-bordercolor" style="width: 169px; height: 220px; margin: 10px;"></div>'), stopPropagation: true },
                                    { template: _.template('<a id="format-rules-borders-menu-new-bordercolor" style="padding-left:12px;">' + this.textNewColor + '</a>'),  stopPropagation: true }
                                ]
                            })
                        })
                    ]
                })
            });
            this.btnBorders.menu.on('item:click', _.bind(this.onBordersMenu, this));
            this.btnBorders.on('click', _.bind(this.onBorders, this));
            this.mnuBorderColorPicker = new Common.UI.ThemeColorPalette({
                el: $('#format-rules-borders-menu-bordercolor')
            });
            this.mnuBorderColorPicker.on('select', _.bind(this.onBordersColor, this));
            $('#format-rules-borders-menu-new-bordercolor').on('click', _.bind(function() {
                me.mnuBorderColorPicker.addNewColor();
            }, this));

            this.mnuBorderWidth.on('item:toggle', _.bind(this.onBordersWidth, this));

            this.ascFormatOptions = {
                General     : 'General',
                Number      : '0.00',
                Currency    : '$#,##0.00',
                Accounting  : '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)',
                DateShort   : 'm/d/yyyy',
                DateLong    : '[$-F800]dddd, mmmm dd, yyyy',
                Time        : '[$-F400]h:mm:ss AM/PM',
                Percentage  : '0.00%',
                Percent     : '0%',
                Fraction    : '# ?/?',
                Scientific  : '0.00E+00',
                Text        : '@'
            };

            this.numFormatData = [
                { value: Asc.c_oAscNumFormatType.General,   format: this.ascFormatOptions.General,     displayValue: this.txtGeneral,      exampleval: '100' },
                { value: Asc.c_oAscNumFormatType.Number,    format: this.ascFormatOptions.Number,      displayValue: this.txtNumber,       exampleval: '100,00' },
                { value: Asc.c_oAscNumFormatType.Scientific,format: this.ascFormatOptions.Scientific,  displayValue: this.txtScientific,   exampleval: '1,00E+02' },
                { value: Asc.c_oAscNumFormatType.Accounting,format: this.ascFormatOptions.Accounting,  displayValue: this.txtAccounting,   exampleval: '100,00 $' },
                { value: Asc.c_oAscNumFormatType.Currency,  format: this.ascFormatOptions.Currency,    displayValue: this.txtCurrency,     exampleval: '100,00 $' },
                { value: Asc.c_oAscNumFormatType.Date,      format: 'MM-dd-yyyy',                      displayValue: this.txtDate,         exampleval: '04-09-1900' },
                { value: Asc.c_oAscNumFormatType.Time,      format: 'HH:MM:ss',                        displayValue: this.txtTime,         exampleval: '00:00:00' },
                { value: Asc.c_oAscNumFormatType.Percent,   format: this.ascFormatOptions.Percentage,  displayValue: this.txtPercentage,   exampleval: '100,00%' },
                { value: Asc.c_oAscNumFormatType.Fraction,  format: this.ascFormatOptions.Fraction,    displayValue: this.txtFraction,     exampleval: '100' },
                { value: Asc.c_oAscNumFormatType.Text,      format: this.ascFormatOptions.Text,        displayValue: this.txtText,         exampleval: '100' }
            ];

            if (this.api) {
                var me = this,
                    info = new Asc.asc_CFormatCellsInfo();
                info.asc_setType(Asc.c_oAscNumFormatType.None);
                info.asc_setSymbol(this.langId);
                var arr = this.api.asc_getFormatCells(info); // all formats
                this.numFormatData.forEach( function(item, index) {
                    item.format = arr[index];
                    item.exampleval = me.api.asc_getLocaleExample(item.format, 100);
                });
            }

            var formatTemplate =
                _.template([
                    '<% _.each(items, function(item) { %>',
                    '<li id="<%= item.id %>" data-value="<%= item.value %>"><a tabindex="-1" type="menuitem">',
                    '<div style="position: relative;"><div style="position: absolute; left: 0; width: 100px;"><%= scope.getDisplayValue(item) %></div>',
                    '<div style="display: inline-block; width: 100%; max-width: 300px; overflow: hidden; text-overflow: ellipsis; text-align: right; vertical-align: bottom; padding-left: 100px; color: silver;white-space: nowrap;"><%= item.exampleval ? item.exampleval : "" %></div>',
                    '</div></a></li>',
                    '<% }); %>'
                    // ,'<li class="divider">',
                    // '<li id="id-toolbar-mnu-item-more-formats" data-value="-1"><a tabindex="-1" type="menuitem">' + me.textMoreFormats + '</a></li>'
                ].join(''));

            this.cmbNumberFormat = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-num-format'),
                cls         : 'input-group-nr',
                style       : 'width: 111px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                hint        : this.tipNumFormat,
                itemsTemplate: formatTemplate,
                editable    : false,
                data        : this.numFormatData
            });
            this.cmbNumberFormat.setValue(Asc.c_oAscNumFormatType.General);
            this.cmbNumberFormat.on('selected', _.bind(this.onNumberFormatSelect, this));

            this.btnClear = new Common.UI.Button({
                el: $('#format-rules-edit-btn-clear')
            });
            this.btnClear.on('click', _.bind(this.clearFormat, this));

            // Scale
            this.scaleControls = [];
            this.lblMidScale = this.$window.find('#format-rules-edit-lbl-scale-2');

            var data = [
                {value: Asc.c_oAscCfvoType.Number, displayValue: this.txtNumber},
                {value: Asc.c_oAscCfvoType.Percent, displayValue: this.textPercent},
                {value: Asc.c_oAscCfvoType.Formula, displayValue: this.textFormula},
                {value: Asc.c_oAscCfvoType.Percentile, displayValue: this.textPercentile}
            ];
            for (var i=0; i<3; i++) {
                var arr = data;
                if (i==0)
                    arr = [{value: Asc.c_oAscCfvoType.Minimum, displayValue: this.textMinimum}].concat(arr);
                else if (i==2)
                    arr = [{value: Asc.c_oAscCfvoType.Maximum, displayValue: this.textMaximum}].concat(arr);
                var combo = new Common.UI.ComboBox({
                    el          : $('#format-rules-edit-combo-scale-' + (i+1)),
                    style       : 'width: 100%;',
                    menuStyle   : 'min-width: 100%;max-height: 211px;',
                    editable    : false,
                    cls         : 'input-group-nr',
                    data        : arr,
                    type        : i
                }).on('selected', function(combo, record) {
                    me.scaleControls[combo.options.type].range.setDisabled(record.value==Asc.c_oAscCfvoType.Minimum || record.value==Asc.c_oAscCfvoType.Maximum);
                    me.setDefComboValue(combo.options.type, record.value, me.scaleControls[combo.options.type].range);
                });
                combo.setValue((i==1) ? Asc.c_oAscCfvoType.Percentile : arr[0].value);

                var range = new Common.UI.InputFieldBtn({
                    el          : $('#format-rules-edit-txt-scale-' + (i+1)),
                    name        : 'range',
                    style       : 'width: 100%;',
                    allowBlank  : true,
                    btnHint     : this.textSelectData,
                    validateOnChange: false,
                    type        : i,
                    disabled    : (i!=1)
                });
                range.setValue((i==1) ? 50 : '');
                range.on('button:click', _.bind(this.onSelectData, this));

                var color = new Common.UI.ColorButton({
                    parentEl: $('#format-rules-edit-color-scale-' + (i+1)),
                    menu        : true,
                    type        : i,
                    color       : '000000'
                });
                this.scaleControls.push({combo: combo, range: range, color: color});
            }

            // Data Bar
            this.barControls = [];

            for (var i=0; i<2; i++) {
                var arr = data;
                if (i==0) {
                    arr = [{value: Asc.c_oAscCfvoType.Minimum, displayValue: this.textMinimum}].concat(arr);
                    arr.push({value: Asc.c_oAscCfvoType.AutoMin, displayValue: this.textAutomatic});
                } else {
                    arr = [{value: Asc.c_oAscCfvoType.Maximum, displayValue: this.textMaximum}].concat(arr);
                    arr.push({value: Asc.c_oAscCfvoType.AutoMax, displayValue: this.textAutomatic});
                }
                var combo = new Common.UI.ComboBox({
                    el          : $('#format-rules-edit-combo-bar-' + (i+1)),
                    style       : 'width: 100%;',
                    menuStyle   : 'min-width: 100%;max-height: 211px;',
                    editable    : false,
                    cls         : 'input-group-nr',
                    data        : arr,
                    type        : i
                }).on('selected', function(combo, record) {
                    me.barControls[combo.options.type].range.setDisabled(record.value==Asc.c_oAscCfvoType.Minimum || record.value==Asc.c_oAscCfvoType.Maximum ||
                                                                         record.value==Asc.c_oAscCfvoType.AutoMin || record.value==Asc.c_oAscCfvoType.AutoMax);
                    me.setDefComboValue(combo.options.type, record.value, me.barControls[combo.options.type].range);
                });
                combo.setValue(arr[1].value);

                var range = new Common.UI.InputFieldBtn({
                    el          : $('#format-rules-edit-txt-bar-' + (i+1)),
                    name        : 'range',
                    style       : 'width: 100%;',
                    allowBlank  : true,
                    btnHint     : this.textSelectData,
                    validateOnChange: false,
                    type        : i
                });
                range.setValue(0);
                range.on('button:click', _.bind(this.onSelectData, this));
                this.barControls.push({combo: combo, range: range});
            }

            // Fill
            this.cmbFill = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-fill'),
                style       : 'width: 100%;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : [
                    {value: false, displayValue: this.textSolid},
                    {value: true, displayValue: this.textGradient}
                ]
            }).on('selected', function(combo, record) {
                if (me.barProps) {
                    me.barProps.asc_setGradient(record.value);
                    me.previewFormat();
                }
            });
            this.cmbFill.setValue(false);

            this.btnPosFill = new Common.UI.ColorButton({
                parentEl: $('#format-rules-edit-color-pos-fill'),
                style: "width:45px;",
                menu        : true,
                color       : '638EC6'
            });

            this.btnNegFill = new Common.UI.ColorButton({
                parentEl: $('#format-rules-edit-color-neg-fill'),
                style: "width:45px;",
                menu        : true,
                color       : 'FF0000'
            });

            this.chFill = new Common.UI.CheckBox({
                el: $('#format-rules-edit-chk-fill'),
                labelText: this.textSameAs
            });
            this.chFill.on('change', function(field, newValue, oldValue, eOpts){
                me.btnNegFill.setDisabled(field.getValue()=='checked');
            });

            // Border
            this.cmbBorder = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-border'),
                style       : 'width: 100%;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : [
                    {value: false, displayValue: this.textSolid},
                    {value: true, displayValue: this.textNone}
                ]
            }).on('selected', function(combo, record) {
                var hasBorder = !record.value;
                me.btnPosBorder.setDisabled(!hasBorder);
                me.btnNegBorder.setDisabled(!hasBorder || me.chBorder.getValue()=='checked');
                me.chBorder.setDisabled(!hasBorder);
                if (me.barProps) {
                    if (hasBorder) {
                        me.barProps.asc_setBorderColor(Common.Utils.ThemeColor.getRgbColor(me.btnPosBorder.colorPicker.currentColor));
                    } else
                        me.barProps.asc_setBorderColor(null);
                    me.previewFormat();
                }
            });
            this.cmbBorder.setValue(false);

            this.btnPosBorder = new Common.UI.ColorButton({
                parentEl: $('#format-rules-edit-color-pos-border'),
                style: "width:45px;",
                menu        : true,
                color       : '000000'
            });

            this.btnNegBorder = new Common.UI.ColorButton({
                parentEl: $('#format-rules-edit-color-neg-border'),
                style: "width:45px;",
                menu        : true,
                color       : '000000'
            });

            this.chBorder = new Common.UI.CheckBox({
                el: $('#format-rules-edit-chk-border'),
                labelText: this.textSameAs
            });
            this.chBorder.on('change', function(field, newValue, oldValue, eOpts){
                me.btnNegBorder.setDisabled(field.getValue()=='checked');
            });

            // Axis
            this.cmbBarDirection = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-direction'),
                style       : 'width: 100%;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : [
                    {value: Asc.c_oAscDataBarDirection.context, displayValue: this.textContext},
                    {value: Asc.c_oAscDataBarDirection.leftToRight, displayValue: this.textLeft2Right},
                    {value: Asc.c_oAscDataBarDirection.rightToLeft, displayValue: this.textRight2Left}
                ]
            }).on('selected', function(combo, record) {
                if (me.barProps) {
                    me.barProps.asc_setDirection(record.value);
                    me.previewFormat();
                }
            });
            this.cmbBarDirection.setValue(Asc.c_oAscDataBarDirection.context);

            this.chShowBar = new Common.UI.CheckBox({
                el: $('#format-rules-edit-chk-show-bar'),
                labelText: this.textShowBar
            });

            this.cmbAxisPos = new Common.UI.ComboBox({
                el          : $('#format-rules-edit-combo-axis-pos'),
                style       : 'width: 150px;',
                menuStyle   : 'min-width: 100%;max-height: 211px;',
                editable    : false,
                cls         : 'input-group-nr',
                data        : [
                    {value: Asc.c_oAscDataBarAxisPosition.automatic, displayValue: this.textAutomatic},
                    {value: Asc.c_oAscDataBarAxisPosition.middle, displayValue: this.textCellMidpoint},
                    {value: Asc.c_oAscDataBarAxisPosition.none, displayValue: this.textNone}
                ]
            }).on('selected', function(combo, record) {
                me.btnAxisColor.setDisabled(record.value == Asc.c_oAscDataBarAxisPosition.none);
            });
            this.cmbAxisPos.setValue(Asc.c_oAscDataBarDirection.context);

            this.btnAxisColor = new Common.UI.ColorButton({
                parentEl: $('#format-rules-edit-color-axis-color'),
                style: "width:45px;",
                menu        : true,
                color       : '000000'
            });

            // Icons
            this.collectionPresets = SSE.getCollection('ConditionalFormatIconsPresets');
            if (this.collectionPresets.length<1)
                SSE.getController('Main').fillCondFormatIconsPresets(this.api.asc_getCFIconsByType());

            this.collectionIcons = SSE.getCollection('ConditionalFormatIcons');
            if (this.collectionIcons.length<1)
                SSE.getController('Main').fillCondFormatIcons(this.api.asc_getFullCFIcons());

            arr = [];
            var len = this.collectionPresets.length;
            var iconsPresets = presets[Asc.c_oAscCFRuleTypeSettings.icons];
            _.each(iconsPresets, function(preset, index){
                if (index>=len) return;
                var values = [];
                for (var i = 0; i < preset.length; i++) {
                    var formatValueObject = new AscCommonExcel.CConditionalFormatValueObject();
                    formatValueObject.asc_setType(preset[i][0]);
                    formatValueObject.asc_setVal(preset[i][1]);
                    if (preset[i][2]) {
                        // formatValueObject.asc_setFormula(new AscCommonExcel.CFormulaCF());
                        // formatValueObject.asc_getFormula().asc_setText(preset[1][i][2]);
                    }
                    values.push(formatValueObject);
                }
                arr.push({
                    value: index,
                    data  : {
                        iconSet: me.collectionPresets.at(index).get('icons'),
                        values: values,
                        icons: me.collectionIcons
                    }
                });
            });

            this.cmbIconsPresets = new Common.UI.ComboBoxIcons({
                el          : $('#format-rules-icon-style'),
                editable    : false,
                style       : 'width: 120px;',
                menuStyle   : 'max-height: 220px;min-width: 100%;',
                data        : arr
            }).on('selected', function(combo, record) {
                me.fillIconsControls(record.value, record.data.values);
            });
            this.cmbIconsPresets.setValue(3);
            this.iconsProps = {iconsSet: 3};

            this.chIconShow = new Common.UI.CheckBox({
                el: $('#format-rules-edit-chk-icon-show'),
                labelText: this.textShowIcon
            });
            this.chIconShow.on('change', function(field, newValue, oldValue, eOpts){
            });

            this.btnReverse = new Common.UI.Button({
                el: $('#format-rules-edit-btn-icon-reverse')
            });
            this.btnReverse.on('click', function() {
                me.iconsProps.isReverse = !me.iconsProps.isReverse;
                me.reverseIconsControls();
            });

            var icons = [];
            me.collectionIcons.each(function(icon, index){
                icons.push({
                    value: icon.get('index'),
                    imgUrl: icon.get('icon')
                });
            });

            this.iconsControls = [];
            for (var i=0; i<5; i++) {
                this.iconsControls.push({});

                var combo = new Common.UI.ComboBox({
                    el: $('#format-rules-combo-icon-' + (i+1)),
                    type        : i,
                    template: _.template([
                        '<div class="input-group combobox combo-dataview-menu input-group-nr dropdown-toggle"  data-toggle="dropdown">',
                        '<div class="form-control image" style="width: 55px;background-repeat: no-repeat; background-position: 16px center;"></div>',
                        '<div style="display: table-cell;"></div>',
                        '<button type="button" class="btn btn-default"><span class="caret"></span></button>',
                        '</div>'
                    ].join(''))
                });
                var menu = (new Common.UI.Menu({
                    style: 'min-width: 105px;',
                    additionalAlign: this.menuAddAlign,
                    items: [
                        { template: _.template('<div id="format-rules-combo-menu-icon-' + (i+1) + '" style="width: 217px; margin: 0 5px;"></div>') }
                    ]
                })).render($('#format-rules-combo-icon-' + (i+1)));

                var picker = new Common.UI.DataView({
                    el: $('#format-rules-combo-menu-icon-' + (i+1)),
                    parentMenu: menu,
                    store: new Common.UI.DataViewStore(icons),
                    itemTemplate: _.template('<img id="<%= id %>" class="item-icon" src="<%= imgUrl %>" style="width: 16px; height: 16px;">'),
                    type        : i
                });
                picker.on('item:click', _.bind(this.onSelectIcon, this, combo));
                // this.selectIconItem();
                this.iconsControls[i].cmbIcons = combo;
                this.iconsControls[i].pickerIcons = picker;

                combo = new Common.UI.ComboBox({
                    el          : $('#format-rules-edit-combo-type-' + (i+1)),
                    style       : 'width: 80px;',
                    menuStyle   : 'min-width: 100%;max-height: 211px;',
                    editable    : false,
                    cls         : 'input-group-nr',
                    data        : data,
                    type        : i
                }).on('selected', function(combo, record) {
                });
                combo.setValue(Asc.c_oAscCfvoType.Percent);
                this.iconsControls[i].cmbType = combo;

                combo = new Common.UI.ComboBox({
                    el          : $('#format-rules-edit-combo-op-' + (i+1)),
                    style       : 'width: 55px;',
                    menuStyle   : 'min-width: 100%;',
                    editable    : false,
                    cls         : 'input-group-nr',
                    data        : [{value: true, displayValue: '>=', prevOp: '<'}, {value: false, displayValue: '>', prevOp: '<='}],
                    type        : i
                }).on('selected', function(combo, record) {
                    me.fillIconsLabels();
                });
                combo.setValue(1);
                this.iconsControls[i].cmbOperator = combo;

                var range = new Common.UI.InputFieldBtn({
                    el          : $('#format-rules-edit-txt-value-' + (i+1)),
                    name        : 'range',
                    style       : 'width: 100px;',
                    allowBlank  : true,
                    btnHint     : this.textSelectData,
                    validateOnChange: false,
                    type        : i
                }).on('changed:after', function(input, newValue, oldValue, e) {
                    me.fillIconsLabels();
                });
                range.setValue('');
                this.iconsControls[i].value = range;
                range.on('button:click', _.bind(this.onSelectData, this));

                this.iconsControls[i].label = $('#format-rules-txt-icon-' + (i+1));
            }

            var rec = this.cmbIconsPresets.getSelectedRecord();
            rec && this.fillIconsControls(rec.value, rec.data.values);

            this.afterRender();
        },

        afterRender: function() {
            this.updateThemeColors();

            this._setDefaults(this.props);
            this.setTitle((this.isEdit) ? this.txtTitleEdit : this.txtTitleNew);
        },

        show: function() {
            Common.Views.AdvancedSettingsWindow.prototype.show.apply(this, arguments);
        },

        _setDefaults: function (props) {
            this._originalProps = props;
            var type = props ? props.asc_getType() : this.type,
                ruleType,
                subtype = this.subtype;

            if (props) {
                var value;
                switch (type) {
                    case Asc.c_oAscCFType.containsText:
                    case Asc.c_oAscCFType.notContainsText:
                    case Asc.c_oAscCFType.beginsWith:
                    case Asc.c_oAscCFType.endsWith:
                        value = props.asc_getContainsText();
                        this.txtRange1.setValue(value || '');
                        break;
                    case Asc.c_oAscCFType.timePeriod:
                        subtype = props.asc_getTimePeriod();
                        break;
                    case Asc.c_oAscCFType.aboveAverage:
                        var above = props.asc_getAboveAverage(),
                            eq = props.asc_getEqualAverage(),
                            stddev = props.asc_getStdDev();
                            subtype = (above) ? 0 : 1;
                        if (eq)
                            subtype += 2;
                        else if (stddev) {
                            subtype += (2 + stddev*2);
                        }
                        break;
                    case Asc.c_oAscCFType.top10:
                        subtype = props.asc_getBottom() ? 1 : 0;
                        this.cmbPercent.setValue(props.asc_getPercent() ? 1 : 0);
                        this.numRank.setValue(props.asc_getRank() ? props.asc_getRank() : 10);
                        break;
                    case Asc.c_oAscCFType.cellIs:
                        subtype = props.asc_getOperator();
                        this.txtRange1.setValue(props.asc_getValue1() || '');
                        this.txtRange2.setValue(props.asc_getValue2() || '');
                        break;
                    case Asc.c_oAscCFType.expression:
                        this.txtRange1.setValue(props.asc_getValue1() || '');
                        break;
                    case Asc.c_oAscCFType.colorScale:
                        value = props.asc_getColorScaleOrDataBarOrIconSetRule();
                        var scales = value.asc_getCFVOs(),
                            colors = value.asc_getColors();
                        subtype = scales.length;
                        var arr = (scales.length==2) ? [this.scaleControls[0], this.scaleControls[2]] : this.scaleControls;
                        for (var i=0; i<scales.length; i++) {
                            var scaletype = scales[i].asc_getType(),
                                val =  scales[i].asc_getVal(),
                                color = colors[i],
                                controls = arr[i];
                            controls.combo.setValue(scaletype);
                            controls.range.setDisabled(scaletype == Asc.c_oAscCfvoType.Minimum || scaletype == Asc.c_oAscCfvoType.Maximum);
                            controls.range.setValue((scaletype !== Asc.c_oAscCfvoType.Minimum && scaletype !== Asc.c_oAscCfvoType.Maximum && val!==null && val!==undefined) ? val : '');
                            this.setColor(color, controls.color);
                        }
                        break;
                    case Asc.c_oAscCFType.dataBar:
                        value = props.asc_getColorScaleOrDataBarOrIconSetRule();
                        var bars = value.asc_getCFVOs();
                        var arr = this.barControls;
                        for (var i=0; i<bars.length; i++) {
                            var bartype = bars[i].asc_getType(),
                                val =  bars[i].asc_getVal(),
                                controls = arr[i];
                            controls.combo.setValue(bartype);
                            controls.range.setDisabled(bartype == Asc.c_oAscCfvoType.Minimum || bartype == Asc.c_oAscCfvoType.Maximum || bartype == Asc.c_oAscCfvoType.AutoMin || bartype == Asc.c_oAscCfvoType.AutoMax);
                            controls.range.setValue((bartype !== Asc.c_oAscCfvoType.Minimum && bartype !== Asc.c_oAscCfvoType.Maximum  && bartype !== Asc.c_oAscCfvoType.AutoMin && bartype !== Asc.c_oAscCfvoType.AutoMax &&
                                                    val!==null && val!==undefined) ? val : '');
                        }
                        this.cmbFill.setValue(value.asc_getGradient());
                        this.setColor(value.asc_getColor(), this.btnPosFill);
                        this.setColor(value.asc_getNegativeColor() || value.asc_getColor(), this.btnNegFill);
                        this.chFill.setValue(value.asc_getNegativeBarColorSameAsPositive());

                        var color = value.asc_getBorderColor();
                        this.cmbBorder.setValue(color===null);
                        this.btnPosBorder.setDisabled(color===null);
                        if (color) {
                            this.setColor(value.asc_getBorderColor(), this.btnPosBorder);
                            this.setColor(value.asc_getNegativeBorderColor() || value.asc_getBorderColor(), this.btnNegBorder);
                        }
                        this.chBorder.setValue(value.asc_getNegativeBarBorderColorSameAsPositive());
                        this.chBorder.setDisabled(color===null);
                        this.btnNegBorder.setDisabled(color===null || value.asc_getNegativeBarBorderColorSameAsPositive());

                        this.cmbBarDirection.setValue(value.asc_getDirection());
                        this.chShowBar.setValue(!value.asc_getShowValue());
                        this.cmbAxisPos.setValue(value.asc_getAxisPosition());
                        value.asc_getAxisColor() && this.setColor(value.asc_getAxisColor(), this.btnAxisColor);
                        this.btnAxisColor.setDisabled(value.asc_getAxisPosition() == Asc.c_oAscDataBarAxisPosition.none);
                        break;
                    case Asc.c_oAscCFType.iconSet:
                        value = props.asc_getColorScaleOrDataBarOrIconSetRule();
                        this.chIconShow.setValue(!value.asc_getShowValue());
                        this.iconsProps.isReverse = value.asc_getReverse();
                        this.fillIconsControls(value.asc_getIconSet(), value.asc_getCFVOs(), value.asc_getIconSets());
                        break;
                }
            }
            if (type === Asc.c_oAscCFType.containsText || type === Asc.c_oAscCFType.notContainsText || type === Asc.c_oAscCFType.beginsWith ||
                type === Asc.c_oAscCFType.endsWith || type === Asc.c_oAscCFType.containsBlanks || type === Asc.c_oAscCFType.notContainsBlanks ||
                type === Asc.c_oAscCFType.duplicateValues || type === Asc.c_oAscCFType.uniqueValues ||
                type === Asc.c_oAscCFType.containsErrors || type === Asc.c_oAscCFType.notContainsErrors ||
                type === Asc.c_oAscCFType.timePeriod || type === Asc.c_oAscCFType.aboveAverage ||
                type === Asc.c_oAscCFType.top10 || type === Asc.c_oAscCFType.cellIs || type === Asc.c_oAscCFType.expression) {

                if (props)
                    this.xfsFormat = props.asc_getDxf();
                else {
                    this.cmbFormats.setValue(0);
                }
            }

            var rec = this.ruleStore.where({type: type});
            if (rec.length>1) {
                if (type == Asc.c_oAscCFType.colorScale) {
                    rec = (subtype == rec[0].get('num')) ? rec[0] : rec[1];
                }
            } else if (rec.length==0) {
                var store = this.ruleStore;
                for (var i=0; i<store.length; i++) {
                    var item = store.at(i),
                        rules = item.get('rules');
                    if (rules && rules.findWhere({type: type})) {
                        rec = item;
                        ruleType = type;
                        break;
                    }
                }
            } else { // find rule
                rec = rec[0];
                var rules = rec.get('rules');
                if (rules && rules.findWhere({type: type})) {
                    ruleType = type;
                } else {
                    // find by subtype
                    if ((subtype!==undefined) && rules && rules.findWhere({subtype: subtype})) {
                        ruleType = subtype;
                    }
                }
            }
            if (!rec)
                rec = this.ruleStore.at(0);
            if (rec) {
                this.cmbCategory.setValue(rec.get('index'));
                this.refreshRules(rec.get('index'), ruleType);
            }

            rec = this.cmbFormats.getSelectedRecord();
            if (rec && rec.value>=0) {
                this.onFormatsSelect(this.cmbFormats, rec);
            } else {
                var xfs = this.xfsFormat ? this.xfsFormat : (new AscCommonExcel.CellXfs());
                this.fillXfsFormatInfo(xfs);
            }
            this.previewFormat();
        },

        setColor: function(color, control, picker) {
            picker = control ? control.colorPicker : picker;
            if (color) {
                if (color.get_type() == Asc.c_oAscColor.COLOR_TYPE_SCHEME) {
                    color = {color: Common.Utils.ThemeColor.getHexColor(color.get_r(), color.get_g(), color.get_b()), effectValue: color.get_value() };
                } else {
                    color = Common.Utils.ThemeColor.getHexColor(color.get_r(), color.get_g(), color.get_b());
                }
            } else {
                color = picker.options.transparent ? 'transparent' : '000000';
            }
            control && control.setColor(color);
            if (_.isObject(color)) {
                var isselected = false;
                for (var i = 0; i < 10; i++) {
                    if (Common.Utils.ThemeColor.ThemeValues[i] == color.effectValue) {
                        picker.select(color, true);
                        isselected = true;
                        break;
                    }
                }
                if (!isselected) picker.clearSelection();
            } else {
                picker.select(color, true);
            }
            picker && (picker.currentColor = color);
            control && (control.currentColor = color);
            return color;
        },

        fillXfsFormatInfo: function(xfs) {
            if (xfs) {
                this.btnBold.toggle(xfs.asc_getFontBold() === true, true);
                this.btnItalic.toggle(xfs.asc_getFontItalic() === true, true);
                this.btnUnderline.toggle(xfs.asc_getFontUnderline() === true, true);
                this.btnStrikeout.toggle(xfs.asc_getFontStrikeout() === true, true);

                var color = this.setColor(xfs.asc_getFontColor(), null, this.mnuTextColorPicker);
                this.btnTextColor.currentColor = color;
                this.mnuTextColorPicker.currentColor = color;
                color = (typeof(color) == 'object') ? color.color : color;
                $('.btn-color-value-line', this.btnTextColor.cmpEl).css('background-color', '#' + color);

                color = this.setColor(xfs.asc_getFillColor(), null, this.mnuFillColorPicker);
                this.btnFillColor.currentColor = color;
                this.mnuFillColorPicker.currentColor = color;
                color = (typeof(color) == 'object') ? color.color : color;
                $('.btn-color-value-line', this.btnFillColor.cmpEl).css('background-color', color=='transparent' ? 'transparent' : '#' + color);

                var val = xfs.asc_getNumFormatInfo();
                val && this.cmbNumberFormat.setValue(val.asc_getType(), this.textCustom);
            }
        },

        getSettings: function() {
            var props;
            var rec = this.ruleStore.findWhere({index: this.cmbCategory.getValue()});

            if (rec) {
                props = this._originalProps || new AscCommonExcel.CConditionalFormattingRule();
                var type = rec.get('type');
                props.asc_setType(type);
                if (type == Asc.c_oAscCFType.containsText || type == Asc.c_oAscCFType.containsBlanks || type == Asc.c_oAscCFType.duplicateValues ||
                    type == Asc.c_oAscCFType.timePeriod || type == Asc.c_oAscCFType.aboveAverage ||
                    type == Asc.c_oAscCFType.top10 || type == Asc.c_oAscCFType.cellIs || type == Asc.c_oAscCFType.expression) {
                    this.xfsFormat && props.asc_setDxf(this.xfsFormat);
                }

                switch (type) {
                    case Asc.c_oAscCFType.containsText:
                        var value = this.txtRange1.getValue();
                        value && props.asc_setContainsText(value);
                        props.asc_setType(this.cmbRule.getValue());
                        break;
                    case Asc.c_oAscCFType.containsBlanks:
                    case Asc.c_oAscCFType.duplicateValues:
                        props.asc_setType(this.cmbRule.getValue());
                        break;
                    case Asc.c_oAscCFType.timePeriod:
                        props.asc_setTimePeriod(this.cmbRule.getValue());
                        break;
                    case Asc.c_oAscCFType.aboveAverage:
                        var val = this.cmbRule.getValue();
                        var above = !(val%2);
                        props.asc_setAboveAverage(above);
                        props.asc_setEqualAverage(val==2 || val==3);
                        props.asc_setStdDev(val>3 ? (val/2 - 1) : 0);
                        break;
                    case Asc.c_oAscCFType.top10:
                        props.asc_setBottom(!!this.cmbRule.getValue());
                        props.asc_setPercent(!!this.cmbPercent.getValue());
                        (this.numRank.getValue()!=='') && props.asc_setRank(this.numRank.getNumberValue());
                        break;
                    case Asc.c_oAscCFType.cellIs:
                        props.asc_setOperator(this.cmbRule.getValue());
                        props.asc_setValue1(this.txtRange1.getValue());
                        props.asc_setValue2(this.txtRange2.getValue());
                        break;
                    case Asc.c_oAscCFType.expression:
                        props.asc_setValue1(this.txtRange1.getValue());
                        break;
                    case Asc.c_oAscCFType.colorScale:
                        var scaleProps = new AscCommonExcel.CColorScale();
                        var scalesCount = rec.get('num');
                        var arr = (scalesCount==2) ? [this.scaleControls[0], this.scaleControls[2]] : this.scaleControls;
                        var colors = [], scales = [];
                        for (var i=0; i<scalesCount; i++) {
                            var scale = new AscCommonExcel.CConditionalFormatValueObject();
                            var controls = arr[i];
                            scale.asc_setType(controls.combo.getValue());
                            scale.asc_setVal(controls.range.getValue());
                            scales.push(scale);
                            colors.push(Common.Utils.ThemeColor.getRgbColor(controls.colorPicker.currentColor));
                        }
                        scaleProps.asc_setColors(colors);
                        scaleProps.asc_setCFVOs(scales);
                        props.asc_setColorScaleOrDataBarOrIconSetRule(scaleProps);
                        break;
                    case Asc.c_oAscCFType.dataBar:
                        var barProps = new AscCommonExcel.CDataBar();
                        var arr = this.barControls;
                        var bars = [];
                        for (var i=0; i<arr.length; i++) {
                            var bar = new AscCommonExcel.CConditionalFormatValueObject();
                            var controls = arr[i],
                                bartype = controls.combo.getValue();
                            bar.asc_setType(bartype);
                            if (bartype !== Asc.c_oAscCfvoType.Minimum && bartype !== Asc.c_oAscCfvoType.Maximum  && bartype !== Asc.c_oAscCfvoType.AutoMin && bartype !== Asc.c_oAscCfvoType.AutoMax)
                                bar.asc_setVal(controls.range.getValue());
                            bars.push(bar);
                        }
                        barProps.asc_setCFVOs(bars);
                        barProps.asc_setGradient(this.cmbFill.getValue());
                        barProps.asc_setColor(Common.Utils.ThemeColor.getRgbColor(this.btnPosFill.colorPicker.currentColor));
                        barProps.asc_setNegativeColor(Common.Utils.ThemeColor.getRgbColor(this.chFill.getValue()=='checked' ? this.btnPosFill.colorPicker.currentColor : this.btnNegFill.colorPicker.currentColor));
                        barProps.asc_setNegativeBarColorSameAsPositive(this.chFill.getValue()=='checked');
                        var hasBorder = !this.cmbBorder.getValue();
                        if (hasBorder) {
                            barProps.asc_setBorderColor(Common.Utils.ThemeColor.getRgbColor(this.btnPosBorder.colorPicker.currentColor));
                            barProps.asc_setNegativeBorderColor(Common.Utils.ThemeColor.getRgbColor(this.chBorder.getValue()=='checked' ? this.btnPosBorder.colorPicker.currentColor : this.btnNegBorder.colorPicker.currentColor));
                            barProps.asc_setNegativeBarBorderColorSameAsPositive(this.chBorder.getValue()=='checked');
                        } else
                            barProps.asc_setBorderColor(null);

                        barProps.asc_setDirection(this.cmbBarDirection.getValue());
                        barProps.asc_setShowValue(this.chShowBar.getValue()!=='checked');
                        var pos = this.cmbAxisPos.getValue();
                        barProps.asc_setAxisPosition(pos);
                        if (pos !== Asc.c_oAscDataBarAxisPosition.none) {
                            barProps.asc_setAxisColor(Common.Utils.ThemeColor.getRgbColor(this.btnAxisColor.colorPicker.currentColor));
                        } else
                            barProps.asc_setAxisColor(null);
                        props.asc_setColorScaleOrDataBarOrIconSetRule(barProps);
                        break;
                    case Asc.c_oAscCFType.iconSet:
                        var iconsProps = new AscCommonExcel.CIconSet();
                        iconsProps.asc_setShowValue(this.chIconShow.getValue()!=='checked');
                        iconsProps.asc_setReverse(!!this.iconsProps.isReverse);
                        iconsProps.asc_setIconSet(this.iconsProps.iconsSet);

                        var arr = this.iconsControls,
                            len = this.iconsProps.iconsLength,
                            icons = (!this.cmbIconsPresets.getSelectedRecord()) ? [] : null,
                            values = [];
                        for (var i=0; i<len; i++) {
                            var controls = arr[i],
                                value = new AscCommonExcel.CConditionalFormatValueObject();
                            value.asc_setType(controls.cmbType.getValue());
                            value.asc_setVal(controls.value.getValue());
                            value.asc_setGte(controls.cmbOperator.getValue());
                            values.push(value);
                            if (icons) {
                                var icon = controls.pickerIcons.getSelectedRec().get('value')+1;
                                for (var k=0; k<this.collectionPresets.length; k++) {
                                    var items = this.collectionPresets.at(k).get('icons');
                                    for (var j=0; j<items.length; j++) {
                                        if (icon==items[j]) {
                                            icon = new AscCommonExcel.CConditionalFormatIconSet();
                                            icon.asc_setIconSet(k);
                                            icon.asc_setIconId(j);
                                            this.iconsProps.isReverse ? icons.unshift(icon) : icons.push(icon);
                                            break;
                                        }
                                    }
                                    if (typeof icon=='object') break;
                                }
                            }
                        }
                        iconsProps.asc_setCFVOs(values);
                        iconsProps.asc_setIconSets(icons);
                        props.asc_setColorScaleOrDataBarOrIconSetRule(iconsProps);
                        break;
                }
            }
            return props;
        },

        refreshRules: function(index, ruleType) {
            var rec = this.ruleStore.findWhere({index: index});
            if (rec) {
                var rules = rec.get('rules'),
                    cmbData = [];
                rules && rules.each(function(rule, idx){
                    cmbData.push({value: (rule.get('type')!==undefined) ? rule.get('type') : rule.get('subtype'), displayValue: rule.get('name')});
                });
                this.cmbRule.setData(cmbData);
                (cmbData.length>0) && this.cmbRule.setValue((ruleType!==undefined) ? ruleType : cmbData[0].value);
            }
            this.setControls(index, this.cmbRule.getValue());

            if (rec) {
                var type = rec.get('type');
                this._changedProps = new AscCommonExcel.CConditionalFormattingRule();
                this._changedProps.asc_setType(type);
                if (type == Asc.c_oAscCFType.containsText || type == Asc.c_oAscCFType.containsBlanks || type == Asc.c_oAscCFType.duplicateValues ||
                    type == Asc.c_oAscCFType.timePeriod || type == Asc.c_oAscCFType.aboveAverage ||
                    type == Asc.c_oAscCFType.top10 || type == Asc.c_oAscCFType.cellIs || type == Asc.c_oAscCFType.expression) {
                    this.xfsFormat && this._changedProps.asc_setDxf(this.xfsFormat);
                } else if (type == Asc.c_oAscCFType.colorScale) {
                    var scalesCount = rec.get('num');
                    var arr = (scalesCount==2) ? [this.scaleControls[0], this.scaleControls[2]] : this.scaleControls;
                    var colors = [], scales = [];
                    for (var i=0; i<arr.length; i++) {
                        var scale = new AscCommonExcel.CConditionalFormatValueObject();
                        var controls = arr[i];
                        scale.asc_setType(controls.combo.getValue());
                        scale.asc_setVal(controls.range.getValue());
                        scales.push(scale);
                        colors.push(Common.Utils.ThemeColor.getRgbColor(controls.colorPicker.currentColor));
                    }
                    this.scaleProps = new AscCommonExcel.CColorScale();
                    this.scaleProps.asc_setColors(colors);
                    this.scaleProps.asc_setCFVOs(scales);
                    this._changedProps.asc_setColorScaleOrDataBarOrIconSetRule(this.scaleProps);
                } else if (type == Asc.c_oAscCFType.dataBar) {
                    this.barProps = new AscCommonExcel.CDataBar();
                    this.barProps.asc_setGradient(this.cmbFill.getValue());
                    this.barProps.asc_setColor(Common.Utils.ThemeColor.getRgbColor(this.btnPosFill.colorPicker.currentColor));
                    var hasBorder = !this.cmbBorder.getValue();
                    if (hasBorder) {
                        this.barProps.asc_setBorderColor(Common.Utils.ThemeColor.getRgbColor(this.btnPosBorder.colorPicker.currentColor));
                    } else
                        this.barProps.asc_setBorderColor(null);

                    this.barProps.asc_setDirection(this.cmbBarDirection.getValue());
                    this._changedProps.asc_setColorScaleOrDataBarOrIconSetRule(this.barProps);
                }
                this.previewFormat();
            }
        },

        setControls: function(category, rule) {
            var hasformat = this.$window.find('.hasformat');
            hasformat.toggleClass('hidden', category>=7 && category<=10);

            this.cmbRule.setVisible(category<7);

            this.txtRange1.setVisible(category==0 || category==3 || category==11);
            this.txtRange2.setVisible(category==0 && (rule == Asc.c_oAscCFOperator.between || rule == Asc.c_oAscCFOperator.notBetween));

            this.cmbPercent.setVisible(category==1);
            this.numRank.setVisible(category==1);

            this.txtRange1.cmpEl.width(category==11 ? 305 : 150);

            this.$window.find('.scale').toggleClass('hidden', category<7 || category>8);
            if (category==7 || category==8) {
                this.scaleControls[1].combo.setVisible(category==8);
                this.scaleControls[1].range.setVisible(category==8);
                this.scaleControls[1].color.setVisible(category==8);
                this.lblMidScale.toggleClass('hidden', category==7);
            }

            this.$window.find('.databar').toggleClass('hidden', category!==9);
            this.$window.find('.iconset').toggleClass('hidden', category!==10);
        },

        onSelectData: function(cmp) {
            var me = this;
            if (me.api) {
                var handlerDlg = function(dlg, result) {
                    if (result == 'ok') {
                        cmp.setValue(dlg.getSettings());
                        cmp.checkValidate();
                    }
                };

                var win = new SSE.Views.CellRangeDialog({
                    handler: handlerDlg
                }).on('close', function() {
                    me.show();
                });

                var xy = me.$window.offset();
                me.hide();
                win.show(xy.left + 160, xy.top + 125);
                win.setSettings({
                    api     : me.api,
                    range   : (!_.isEmpty(cmp.getValue()) && (cmp.checkValidate()==true)) ? cmp.getValue() : '',
                    type    : Asc.c_oAscSelectionDialogType.ConditionalFormattingRule,
                    validation: function() {return true;}
                });
            }
        },

        onFormatsSelect: function(combo, record) {
            var xfs = new AscCommonExcel.CellXfs();
            record && record.fontColor && xfs.asc_setFontColor(Common.Utils.ThemeColor.getRgbColor(record.fontColor));
            record && record.fillColor && xfs.asc_setFillColor(Common.Utils.ThemeColor.getRgbColor(record.fillColor));
            if (record && record.borderColor) {
                var new_borders = [],
                    bordersWidth = Asc.c_oAscBorderStyles.Thin,
                    bordersColor = Common.Utils.ThemeColor.getRgbColor(record.borderColor);
                new_borders[Asc.c_oAscBorderOptions.Left]   = new Asc.asc_CBorder(bordersWidth, bordersColor);
                new_borders[Asc.c_oAscBorderOptions.Top]    = new Asc.asc_CBorder(bordersWidth, bordersColor);
                new_borders[Asc.c_oAscBorderOptions.Right]  = new Asc.asc_CBorder(bordersWidth, bordersColor);
                new_borders[Asc.c_oAscBorderOptions.Bottom] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                xfs.asc_setBorder(new_borders);
            }
            this.xfsFormat = xfs;
            this._changedProps && this._changedProps.asc_setDxf(xfs);
            this.fillXfsFormatInfo(xfs);
            this.previewFormat();
        },

        clearFormat: function() {
            this.xfsFormat = null;
            this._changedProps && this._changedProps.asc_setDxf(null);
            this.fillXfsFormatInfo(new AscCommonExcel.CellXfs());
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onBoldClick: function() {
            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFontBold(this.btnBold.isActive());
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onItalicClick: function() {
            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFontItalic(this.btnItalic.isActive());
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onUnderlineClick: function() {
            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFontUnderline(this.btnUnderline.isActive());
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },
        onStrikeoutClick: function() {
            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFontStrikeout(this.btnStrikeout.isActive());
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onBordersWidth: function(menu, item, state) {
            if (state) {
                this.btnBorders.options.borderswidth = item.value;
            }
        },

        onBordersColor: function(picker, color) {
            $('#format-rules-borders-border-color .menu-item-icon').css('border-color', '#' + ((typeof(color) == 'object') ? color.color : color));
            this.mnuBorderColor.onUnHoverItem();
            this.btnBorders.options.borderscolor = Common.Utils.ThemeColor.getRgbColor(color);
        },

        onBorders: function(btn) {
            var menuItem;

            _.each(btn.menu.items, function(item) {
                if (btn.options.borderId == item.options.borderId) {
                    menuItem = item;
                    return false;
                }
            });

            if (menuItem) {
                this.onBordersMenu(btn.menu, menuItem);
            }
        },

        onBordersMenu: function(menu, item) {
            var me = this;
            if (!_.isUndefined(item.options.borderId)) {
                var btnBorders = me.btnBorders,
                    new_borders = [],
                    bordersWidth = btnBorders.options.borderswidth,
                    bordersColor = btnBorders.options.borderscolor;

                if ( btnBorders.rendered ) {
                    btnBorders.$icon.removeClass(btnBorders.options.icls).addClass(item.options.icls);
                    btnBorders.options.icls = item.options.icls;
                }

                btnBorders.options.borderId = item.options.borderId;

                if (item.options.borderId == 'inner') {
                    new_borders[Asc.c_oAscBorderOptions.InnerV] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.InnerH] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                } else if (item.options.borderId == 'all') {
                    new_borders[Asc.c_oAscBorderOptions.InnerV] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.InnerH] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Left]   = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Top]    = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Right]  = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Bottom] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                } else if (item.options.borderId == 'outer') {
                    new_borders[Asc.c_oAscBorderOptions.Left]   = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Top]    = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Right]  = new Asc.asc_CBorder(bordersWidth, bordersColor);
                    new_borders[Asc.c_oAscBorderOptions.Bottom] = new Asc.asc_CBorder(bordersWidth, bordersColor);
                } else if (item.options.borderId != 'none') {
                    new_borders[item.options.borderId]   = new Asc.asc_CBorder(bordersWidth, bordersColor);
                }
                !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
                this.xfsFormat.asc_setBorder(new_borders);
                this.cmbFormats.setValue(this.textCustom);
                this.previewFormat();
            }
        },

        onFormatTextColorSelect: function(picker, color, fromBtn) {
            var clr = (typeof(color) == 'object') ? color.color : color;
            this.btnTextColor.currentColor = color;
            $('.btn-color-value-line', this.btnTextColor.cmpEl).css('background-color', '#' + clr);
            picker.currentColor = color;

            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFontColor(Common.Utils.ThemeColor.getRgbColor(this.mnuTextColorPicker.currentColor));
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onFormatTextColor: function(btn, e) {
            this.mnuTextColorPicker.trigger('select', this.mnuTextColorPicker, this.mnuTextColorPicker.currentColor, true);
        },

        onFormatFillColorSelect: function(picker, color, fromBtn) {
            var clr = (typeof(color) == 'object') ? color.color : color;
            this.btnFillColor.currentColor = color;
            $('.btn-color-value-line', this.btnFillColor.cmpEl).css('background-color', clr=='transparent' ? 'transparent' : '#' + clr);
            picker.currentColor = color;

            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setFillColor(this.mnuFillColorPicker.currentColor == 'transparent' ? null : Common.Utils.ThemeColor.getRgbColor(this.mnuFillColorPicker.currentColor));
            this.cmbFormats.setValue(this.textCustom);
            this.previewFormat();
        },

        onFormatFillColor: function(picker, btn, e) {
            this.mnuFillColorPicker.trigger('select', this.mnuFillColorPicker, this.mnuFillColorPicker.currentColor, true);
        },

        onNumberFormatSelect: function(combo, record) {
            !this.xfsFormat && (this.xfsFormat = new AscCommonExcel.CellXfs());
            this.xfsFormat.asc_setNumFormatInfo(record.format);
            this.previewFormat();
        },

        previewFormat: function() {
            if (this._changedProps) {
                var type = this._changedProps.asc_getType();
                if (type == Asc.c_oAscCFType.containsText || type == Asc.c_oAscCFType.notContainsText || type == Asc.c_oAscCFType.beginsWith ||
                    type == Asc.c_oAscCFType.endsWith || type == Asc.c_oAscCFType.containsBlanks || type == Asc.c_oAscCFType.notContainsBlanks ||
                    type == Asc.c_oAscCFType.duplicateValues || type == Asc.c_oAscCFType.uniqueValues ||
                    type == Asc.c_oAscCFType.containsErrors || type == Asc.c_oAscCFType.notContainsErrors ||
                    type == Asc.c_oAscCFType.timePeriod || type == Asc.c_oAscCFType.aboveAverage ||
                    type == Asc.c_oAscCFType.top10 || type == Asc.c_oAscCFType.cellIs || type == Asc.c_oAscCFType.expression) {
                    this.xfsFormat && !this._changedProps.asc_getDxf() && this._changedProps.asc_setDxf(this.xfsFormat);
                    this._changedProps.asc_getPreview('format-rules-edit-preview-format', this.xfsFormat ? Common.define.conditionalData.exampleText : Common.define.conditionalData.noFormatText);
                } else if (type == Asc.c_oAscCFType.colorScale) {
                    this._changedProps.asc_getPreview('format-rules-edit-preview-scale', '');
                } else if (type == Asc.c_oAscCFType.dataBar) {
                    this._changedProps.asc_getPreview('format-rules-edit-preview-databar', '');
                }
            }
        },

        updateThemeColors: function() {
            for (var i=0; i<this.scaleControls.length; i++) {
                var btn = this.scaleControls[i].color;
                btn.setMenu();
                var colorPicker = btn.getPicker();
                colorPicker.options.type = i;
                colorPicker.updateColors(Common.Utils.ThemeColor.getEffectColors(), Common.Utils.ThemeColor.getStandartColors());
                colorPicker.currentColor = (i==0) ? 'FFC000' : (i==1 ? 'FFFF00' : '92D050');
                colorPicker.select(colorPicker.currentColor, true);
                btn.setColor(colorPicker.currentColor);
                this.scaleControls[i].colorPicker = colorPicker;
                btn.on('color:select', _.bind(this.onScaleColorsSelect, this));
            }

            var me = this;
            var initColor = function(btn) {
                btn.setMenu();
                var colorPicker = btn.getPicker();
                colorPicker.updateColors(Common.Utils.ThemeColor.getEffectColors(), Common.Utils.ThemeColor.getStandartColors());
                btn.colorPicker = colorPicker;
                colorPicker.currentColor = btn.color;
                colorPicker.select(colorPicker.currentColor, true);
            };
            initColor(this.btnPosFill);
            this.btnPosFill.on('color:select', _.bind(this.onBarColorsSelect, this, 'pos'));
            initColor(this.btnNegFill);
            this.btnNegFill.on('color:select', _.bind(this.onBarColorsSelect, this, ''));
            initColor(this.btnPosBorder);
            this.btnPosBorder.on('color:select', _.bind(this.onBarColorsSelect, this, 'pos-border'));
            initColor(this.btnNegBorder);
            this.btnNegBorder.on('color:select', _.bind(this.onBarColorsSelect, this, ''));
            initColor(this.btnAxisColor);
            this.btnAxisColor.on('color:select', _.bind(this.onBarColorsSelect, this, ''));

            this.mnuTextColorPicker.updateColors(Common.Utils.ThemeColor.getEffectColors(), Common.Utils.ThemeColor.getStandartColors());
            this.mnuFillColorPicker.updateColors(Common.Utils.ThemeColor.getEffectColors(), Common.Utils.ThemeColor.getStandartColors());
            this.mnuBorderColorPicker.updateColors(Common.Utils.ThemeColor.getEffectColors(), Common.Utils.ThemeColor.getStandartColors());
        },

        onScaleColorsSelect: function(picker, color) {
            picker.colorPicker.currentColor = color;

            if (this.scaleProps ) {
                var colors = this.scaleProps.asc_getColors();
                colors[Math.min(picker.options.type, colors.length-1)] = Common.Utils.ThemeColor.getRgbColor(picker.colorPicker.currentColor);
                this.scaleProps.asc_setColors(colors);
                this.previewFormat();
            }
        },

        onBarColorsSelect: function(type, picker, color) {
            picker.colorPicker.currentColor = color;
            if (this.barProps && (type=='pos' || type=='pos-border')) {
                if (type=='pos')
                    this.barProps.asc_setColor(Common.Utils.ThemeColor.getRgbColor(color));
                else
                    this.barProps.asc_setBorderColor(Common.Utils.ThemeColor.getRgbColor(color));
                this.previewFormat();
            }
        },

        setDefComboValue: function(index, type, range) {
            var category = this.cmbCategory.getValue(),
                value = '';
            switch (type) {
                case Asc.c_oAscCfvoType.Number:
                    value = 0;
                    break;
                case Asc.c_oAscCfvoType.Percent:
                    value = (index==0) ? 0 : (index==1 && category==8 ? 50 : 100);
                    break;
                case Asc.c_oAscCfvoType.Percentile:
                    value = (index==0) ? 10 : (index==1 && category==8 ? 50 : 90);
                    break;
            }
            range.setValue(value);
        },

        fillIconsControls: function(iconSet, values, icons) {
            var me = this;
            this.iconsProps.iconsSet = iconSet;
            this.iconsProps.iconsLength = values.length;
            this.$window.find('.icons-5').toggleClass('hidden', this.iconsProps.iconsLength<5);
            this.$window.find('.icons-4').toggleClass('hidden', this.iconsProps.iconsLength<4);

            var arr = this.iconsControls;
            for (var i=0; i<values.length; i++) {
                var controls = arr[i];
                controls.cmbType.setValue(values[i].asc_getType());
                controls.value.setValue(values[i].asc_getVal() || '');
                controls.cmbOperator.setValue(values[i].asc_getGte());
            }
            var iconsIndexes = [];
            if (icons && icons.length>0) {
                this.cmbIconsPresets.setValue(this.textCustom);
                _.each(icons, function(item) {
                    iconsIndexes.push(me.collectionPresets.at(item.asc_getIconSet()).get('icons')[item.asc_getIconId()]);
                });
            } else {
                this.cmbIconsPresets.setValue(iconSet);
                iconsIndexes = me.collectionPresets.at(iconSet).get('icons');
            }
            var isReverse = this.iconsProps.isReverse;
            var len = iconsIndexes.length;
            for (var i=0; i<iconsIndexes.length; i++) {
                var controls = arr[isReverse ? len-i-1 : i];
                var rec = controls.pickerIcons.store.findWhere({value: iconsIndexes[i]-1});
                rec && controls.pickerIcons.selectRecord(rec, true);
                this.selectIconItem(controls.cmbIcons, rec);
            }
            this.fillIconsLabels();
        },

        fillIconsLabels: function() {
            var arr = this.iconsControls,
                len = this.iconsProps.iconsLength,
                regstr = new RegExp('^\s*[0-9]+[,.]?[0-9]*\s*$');
            var val = arr[1].value.getValue();
            arr[0].label.text(Common.Utils.String.format(this.textIconLabelFirst, arr[1].cmbOperator.getSelectedRecord().prevOp, regstr.test(val) ? parseFloat(val) : this.textFormula));
            for (var i=1; i<len-1; i++) {
                val = arr[i+1].value.getValue();
                arr[i].label.text(Common.Utils.String.format(this.textIconLabel, arr[i+1].cmbOperator.getSelectedRecord().prevOp, regstr.test(val) ? parseFloat(val) : this.textFormula));
            }
            arr[len-1].label.text(this.textIconLabelLast);
        },

        reverseIconsControls: function() {
            var arr = this.iconsControls,
                len = this.iconsProps.iconsLength;
            for (var i=0; i<len/2; i++) {
                var controls1 = arr[i],
                    controls2 = arr[len-i-1];
                var icon1 = controls1.pickerIcons.getSelectedRec().get('value'),
                    icon2 = controls2.pickerIcons.getSelectedRec().get('value');
                var rec = controls1.pickerIcons.store.findWhere({value: icon2});
                rec && controls1.pickerIcons.selectRecord(rec, true);
                this.selectIconItem(controls1.cmbIcons, rec);
                rec = controls2.pickerIcons.store.findWhere({value: icon1});
                rec && controls2.pickerIcons.selectRecord(rec, true);
                this.selectIconItem(controls2.cmbIcons, rec);
            }
        },

        onSelectIcon: function(combo, picker, view, record) {
            this.selectIconItem(combo, record);
            this.cmbIconsPresets.setValue(this.textCustom);
        },

        selectIconItem: function(combo, record) {
            var formcontrol = $(combo.el).find('.form-control');
            formcontrol.css('background-image', record ? 'url(' + record.get('imgUrl') + ')' : '');
        },

        isRangeValid: function() {
            var rec = this.ruleStore.findWhere({index: this.cmbCategory.getValue()}),
                res;

            if (rec) {
                var type = rec.get('type'),
                    arr = [],
                    msg,
                    focusedInput;
                switch (type) {
                    case Asc.c_oAscCFType.containsText:
                    case Asc.c_oAscCFType.expression:
                        if (this.txtRange1.getValue()==='')
                            msg = (type==Asc.c_oAscCFType.containsText ? this.textEmptyText:  this.textEmptyFormulaExt);
                        else {
                            res = this.api.asc_isValidDataRefCf(type, [[this.txtRange1.getValue()]]);
                            res && (res = res[0]);
                        }
                        (res || msg) && (focusedInput = this.txtRange1);
                        break;
                    case Asc.c_oAscCFType.cellIs:
                        var subtype = this.cmbRule.getValue();
                        if (this.txtRange1.getValue()==='') {
                            msg = this.textEmptyValue;
                            focusedInput = this.txtRange1;
                        } else if ((subtype == Asc.c_oAscCFOperator.notBetween || subtype == Asc.c_oAscCFOperator.between) && (this.txtRange2.getValue()==='')) {
                            msg = this.textEmptyValue;
                            focusedInput = this.txtRange2;
                        } else {
                            arr = [[this.txtRange1.getValue()]];
                            if (subtype == Asc.c_oAscCFOperator.notBetween || subtype == Asc.c_oAscCFOperator.between)
                                arr.push([this.txtRange2.getValue()]);
                            res = this.api.asc_isValidDataRefCf(type, arr);
                            if (res) {
                                focusedInput = res[1] ? this.txtRange2 : this.txtRange1;
                                res = res[0];
                            }
                        }
                        break;
                    case Asc.c_oAscCFType.top10:
                        var isPercent = !!this.cmbPercent.getValue();
                        res = this.api.asc_isValidDataRefCf(type, [[this.numRank.getNumberValue(), isPercent]]);
                        res && (res = res[0]);
                        if (res == Asc.c_oAscError.ID.ErrorTop10Between)
                            msg = Common.Utils.String.format(this.textErrorTop10Between, isPercent ? 0 : 1, isPercent ? 100 : 1000);
                        break;
                    case Asc.c_oAscCFType.colorScale:
                        var scalesCount = rec.get('num');
                        var scaleControls = (scalesCount==2) ? [this.scaleControls[0], this.scaleControls[2]] : this.scaleControls;
                        for (var i=0; i<scalesCount; i++) {
                            if (!scaleControls[i].range.isDisabled() && scaleControls[i].range.getValue()==='') {
                                msg = (scaleControls[i].combo.getValue()==Asc.c_oAscCfvoType.Formula) ? this.textEmptyFormula : this.textEmptyText;
                                focusedInput = scaleControls[i].range;
                                break;
                            }
                        }
                        if (!msg) {
                            for (var i=0; i<scalesCount; i++) {
                                arr.push([scaleControls[i].range.getValue(), scaleControls[i].combo.getValue()]);
                            }
                            res = this.api.asc_isValidDataRefCf(type, arr);
                            if (res) {
                                var index = res[1];
                                focusedInput = scaleControls[index].range;
                                res = res[0];
                                if (res == Asc.c_oAscError.ID.ValueMustBeGreaterThen) {
                                    msg = Common.Utils.String.format(this.textErrorGreater, index==0 ? this.textMinpoint : (index==scalesCount-1 ? this.textMaxpoint : this.textMidpoint),
                                                                                            (index==scalesCount-1 && scalesCount==3) ? this.textMidpoint : this.textMinpoint);
                                } else if (res == Asc.c_oAscError.ID.NotValidPercentage)
                                    msg = Common.Utils.String.format(this.textNotValidPercentageExt, index==0 ? this.textMinpoint : (index==scalesCount-1 ? this.textMaxpoint : this.textMidpoint));
                                else if (res == Asc.c_oAscError.ID.NotValidPercentile)
                                    msg = Common.Utils.String.format(this.textNotValidPercentileExt, index==0 ? this.textMinpoint : (index==scalesCount-1 ? this.textMaxpoint : this.textMidpoint));
                            }
                        }
                        break;
                    case Asc.c_oAscCFType.dataBar:
                        var barControls = this.barControls;
                        for (var i=0; i<barControls.length; i++) {
                            if (!barControls[i].range.isDisabled() && barControls[i].range.getValue()==='') {
                                msg = (barControls[i].combo.getValue()==Asc.c_oAscCfvoType.Formula) ? this.textEmptyFormula : this.textEmptyText;
                                focusedInput = barControls[i].range;
                                break;
                            }
                        }
                        if (!msg) {
                            for (var i=0; i<barControls.length; i++) {
                                arr.push([barControls[i].range.getValue(), barControls[i].combo.getValue()]);
                            }
                            res = this.api.asc_isValidDataRefCf(type, arr);
                            if (res) {
                                var index = res[1];
                                focusedInput = barControls[index].range;
                                res = res[0];
                                if (res == Asc.c_oAscError.ID.NotValidPercentage)
                                    msg = Common.Utils.String.format(this.textNotValidPercentageExt, index ? this.textLongBar : this.textShortBar);
                                else if (res == Asc.c_oAscError.ID.NotValidPercentile)
                                    msg = Common.Utils.String.format(this.textNotValidPercentileExt, index ? this.textLongBar : this.textShortBar);
                            }
                        }
                        break;
                    case Asc.c_oAscCFType.iconSet:
                        var iconsControls = this.iconsControls;
                        for (var i=0; i<this.iconsProps.iconsLength; i++) {
                            if (!iconsControls[i].value.isDisabled() && iconsControls[i].value.getValue()==='') {
                                msg = (iconsControls[i].cmbType.getValue()==Asc.c_oAscCfvoType.Formula) ? this.textEmptyFormula : this.textEmptyText;
                                focusedInput = iconsControls[i].value;
                                break;
                            }
                        }
                        if (!msg) {
                            for (var i=0; i<this.iconsProps.iconsLength; i++) {
                                arr.push([iconsControls[i].value.getValue(), iconsControls[i].cmbType.getValue()]);
                            }
                            res = this.api.asc_isValidDataRefCf(type, arr);
                            if (res) {
                                focusedInput = iconsControls[res[1]].value;
                                res = res[0];
                            }
                        }
                        break;

                }
                if (!msg && res) {
                    switch (res) {
                        case Asc.c_oAscError.ID.NotValidPercentile:
                            msg = this.textNotValidPercentile;
                            break;
                        case Asc.c_oAscError.ID.NotValidPercentage:
                            msg = this.textNotValidPercentage;
                            break;
                        case Asc.c_oAscError.ID.CannotAddConditionalFormatting:
                            msg = this.textCannotAddCF;
                            break;
                        case Asc.c_oAscError.ID.NotSingleReferenceCannotUsed:
                            msg = this.textSingleRef;
                            break;
                        case Asc.c_oAscError.ID.CannotUseRelativeReference:
                            msg = this.textRelativeRef;
                            break;
                        case Asc.c_oAscError.ID.IconDataRangesOverlap:
                            msg = this.textIconsOverlap;
                            break;
                        default:
                            msg = this.textInvalid;
                    }
                }
                msg && Common.UI.warning({
                    msg: msg,
                    maxwidth: 600,
                    callback: function(btn){
                        focusedInput && focusedInput.focus();
                    }
                });
                return (!msg);
            }
        },

        onPrimary: function() {
            this.onDlgBtnClick('ok');
            return false;
        },

        onDlgBtnClick: function(event) {
            var me = this;
            var state = (typeof(event) == 'object') ? event.currentTarget.attributes['result'].value : event;
            if (state == 'ok') {
                if (!this.isRangeValid())
                    return;

                this.handler && this.handler.call(this, state,  (state == 'ok') ? this.getSettings() : undefined);
            }

            this.close();
        },

        txtTitleNew: 'New Formatting Rule',
        txtTitleEdit: 'Edit Formatting Rule',
        textSelectData: 'Select Data',
        textApply: 'Apply to Range',
        textRule: 'Rule',
        txtEmpty: 'This field is required',
        textInvalidRange: 'ERROR! Invalid cells range',
        notcriticalErrorTitle: 'Warning',
        textFormat: 'Format',
        textValue: 'Value is',
        textRanked: 'Ranked',
        textCustom: 'Custom',
        textBold:    'Bold',
        textItalic:  'Italic',
        textUnderline: 'Underline',
        textStrikeout: 'Strikeout',
        textSuperscript: 'Superscript',
        textSubscript: 'Subscript',
        textColor: 'Text color',
        fillColor: 'Background color',
        textMinpoint: 'Minpoint',
        textMidpoint: 'Midpoint',
        textMaxpoint: 'Maxpoint',
        textMinimum: 'Minimum',
        textMaximum: 'Maximum',
        textAppearance: 'Bar Appearance',
        txtNumber:          'Number',
        txtGeneral:         'General',
        txtCurrency:        'Currency',
        txtAccounting:      'Accounting',
        txtDate:            'Date',
        txtTime:            'Time',
        txtPercentage:      'Percentage',
        txtFraction:        'Fraction',
        txtScientific:      'Scientific',
        txtText:            'Text',
        tipBorders:         'Borders',
        textOutBorders:     'Outside Borders',
        textAllBorders:     'All Borders',
        textTopBorders:     'Top Borders',
        textBottomBorders:  'Bottom Borders',
        textLeftBorders:    'Left Borders',
        textRightBorders:   'Right Borders',
        textNoBorders:      'No Borders',
        textInsideBorders:  'Inside Borders',
        textMiddleBorders:  'Inside Horizontal Borders',
        textCenterBorders:  'Inside Vertical Borders',
        textDiagDownBorder: 'Diagonal Down Border',
        textDiagUpBorder:   'Diagonal Up Border',
        textBordersStyle:   'Border Style',
        textBordersColor:   'Borders Color',
        textNewColor:       'Add New Custom Color',
        tipNumFormat:       'Number Format',
        textPreview: 'Preview',
        text2Scales: '2 Color scale',
        text3Scales: '3 Color scale',
        textPercent: 'Percent',
        textFormula: 'Formula',
        textPercentile: 'Percentile',
        textAutomatic: 'Automatic',
        textContext: 'Context',
        textLeft2Right: 'Left to right',
        textRight2Left: 'Right to left',
        textNone: 'None',
        textSolid: 'Solid',
        textCellMidpoint: 'Cell midpoint',
        textGradient: 'Gradient',
        textFill: 'Fill',
        textPositive: 'Positive',
        textNegative: 'Negative',
        textBorder: 'Border',
        textBarDirection: 'Bar Direction',
        textAxis: 'Axis',
        textPosition: 'Position',
        textShowBar: 'Show bar only',
        textSameAs: 'Same as positive',
        textIconStyle: 'Icon Style',
        textReverse: 'Reverse Icons Order',
        textShowIcon: 'Show icon only',
        textIconLabelFirst: 'when {0} {1}',
        textIconLabel: 'when {0} {1} and',
        textIconLabelLast: 'when value is',
        textEmptyText: 'Enter a value.',
        textEmptyFormula: 'Enter a valid formula.',
        textEmptyFormulaExt: 'The formula you entered does not evaluate to a number, date, time or string.',
        textEmptyValue: 'The value you entered is not a valid number, date, time or string.',
        textErrorTop10Between: 'Enter a number between {0} and {1}.',
        textNotValidPercentage: 'One or more of the specified values is not a valid percentage.',
        textNotValidPercentile: 'One or more of the specified values is not a valid percentile.',
        textNotValidPercentageExt: 'The specified {0} value is not a valid percentage.',
        textNotValidPercentileExt: 'The specified {0} value is not a valid percentile.',
        textShortBar: 'shortest bar',
        textLongBar: 'longest bar',
        textCannotAddCF: 'Cannot add the conditional formatting.',
        textIconsOverlap: 'One or more icon data ranges overlap.<br>Adjust icon data range values so that the ranges do not overlap.',
        textSingleRef: 'This type of reference cannot be used in a conditional formatting formula.<br>Change the reference to a single cell, or use the reference with a worksheet function, such as =SUM(A1:B5).',
        textRelativeRef: 'You cannot use relative references in conditional formatting criteria for color scales, data bars, and icon sets.',
        textErrorGreater: 'The value for the {0} must be greater than the value for the {1}.',
        textInvalid: 'Invalid data range.',
        textClear: 'Clear',
        textItem: 'Item'

    }, SSE.Views.FormatRulesEditDlg || {}));
});