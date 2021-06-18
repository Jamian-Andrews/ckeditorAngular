import { Component } from '@angular/core';
import * as customBuild from './ckCustomBuild/build/ckeditor';
import {ChangeEvent} from "@ckeditor/ckeditor5-angular";
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public Editor = customBuild;

  data: any;

  public config = {
    toolbar: [ 'heading',
      '|',
      'Alignment',
      'AutoImage',
      'Autoformat',
      'Autolink,',
      'Autosave',
      'BlockQuote',
      'Bold',
      'CKFinderUploadAdapter',
      'CloudServices',
      'Essentials',
      'FontBackgroundColor',
      'FontColor',
      'FontFamily',
      'FontSize',
      'Highlight',
      'HorizontalLine',
      'Image',
      'ImageCaption',
      'ImageResize',
      'ImageStyle',
      'ImageToolbar',
      'ImageUpload',
      'Indent',
      'IndentBlock',
      'Italic',
      'Link',
      'LinkImage',
      'bulletedList',
      'numberedList',
      'MediaEmbed',
      'MediaEmbedToolbar',
      'Mention',
      'PasteFromOffice',
      'SpecialCharacters',
      'SpecialCharactersArrows',
      'SpecialCharactersCurrency',
      'SpecialCharactersEssentials',
      'SpecialCharactersLatin',
      'SpecialCharactersMathematical',
      'SpecialCharactersText',
      'Strikethrough',
      'Subscript',
      'Superscript',
      'insertTable',
      'TextTransformation',
      'Title',
      'Underline'
    ],
    table: {
      contentToolbar: [
        'toggleTableCaption',
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableProperties',
        'tableCellProperties'
      ]
    },

    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
  };


  onChange({ editor }: ChangeEvent ) {
    this.data = editor.getData();

    console.log(this.data);
  }

  download() {
    const options = {
      name: 'output.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {orientation: 'landscape'}
    };

    const element = document.getElementById('ckeditor');

    html2pdf().from(element).set(options).save()
  }


}
