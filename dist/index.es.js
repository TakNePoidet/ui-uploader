function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".uploader{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;border-radius:3px;background-color:#fff;border:1px solid rgba(34,34,34,.1);padding:20px;margin:20px auto;max-width:800px}.uploader .uploader__preview{display:grid;grid-template-columns:repeat(1,1fr);gap:15px;margin-top:0}.uploader .uploader__preview:empty{display:none}.uploader .uploader__preview:not(:empty)+.uploader__file-manager{margin-top:20px}.dropzone{box-sizing:border-box;position:relative}.dropzone .dropzone__wrapper{display:block}.dropzone .dropzone__wrapper .dropzone__control{cursor:pointer}.dropzone .dropzone__wrapper .dropzone__control .dropzone__input{position:absolute;width:100%;height:100%;opacity:0;cursor:pointer}.dropzone .dropzone__wrapper .dropzone__control .dropzone__button{padding:13px 18px;border-radius:3px;font-size:16px;display:block;width:100%;color:rgba(34,34,34,.6);text-align:center;background-color:rgba(22,122,244,.2);border:1px solid rgba(22,122,244,.05);box-shadow:0 2px 2px 0 rgba(18,30,57,.1)}.dropzone .dropzone__wrapper .dropzone__control:hover .dropzone__button{background-color:rgba(22,122,244,.25);box-shadow:0 2px 2px 0 rgba(18,30,57,.2)}.dropzone .dropzone__wrapper .dropzone__dragzone{display:none;height:150px;background-color:rgba(22,122,244,.03);border:3px dashed rgba(22,122,244,.1);border-radius:3px;position:relative;justify-content:center;align-items:center}.dropzone .dropzone__wrapper .dropzone__dragzone:after{content:attr(data-text);font-weight:700;color:rgba(22,122,244,.5)}.dropzone.dropzone--active-dragzone .dropzone__control,.dropzone.dropzone--hide{display:none}.dropzone.dropzone--active-dragzone .dropzone__dragzone{display:flex;height:250px;width:100%;z-index:5;top:0}.dropzone.dropzone--drop-dragzone .dropzone__dragzone{background-color:rgba(22,122,244,.1);border-color:rgba(22,122,244,.2);border-style:solid}.preview-item{width:100%;border-radius:3px;background:#f1f1f1;overflow:hidden;display:flex;flex-direction:column;opacity:0;position:relative;transition:opacity .2s ease-in-out}.preview-item.preview-item--show{opacity:1}.preview-item .preview-item__information{display:grid;grid-template-columns:auto 2fr auto auto;align-items:center;justify-content:space-between;padding:0}.preview-item .preview-item__information .preview-item__title{font-size:18px;line-height:20px;overflow:hidden;padding:15px 0}.preview-item .preview-item__information .preview-item__size{font-size:14px;font-weight:700;text-align:right}.preview-item .preview-item__information .preview-item__type{margin-right:15px;min-width:70px;padding-left:6px}.preview-item .preview-item__information .preview-item__type span{display:inline-flex;font-size:12px;text-align:center;padding:5px 15px;background:#167af4;color:#fff;border-radius:5px;text-transform:uppercase}.preview-item .preview-item__actions{height:50px;right:0;top:0;display:flex;padding:6px;background:#f1f1f1;transition:all .2s ease-in}.preview-item .preview-item__actions .preview-item-action{border:none;outline:none;display:block;width:36px;height:36px;padding:0;display:none;border-radius:3px;background-color:#fff;cursor:pointer}.preview-item .preview-item__actions .preview-item-action svg{width:15px}.preview-item .preview-item__actions .preview-item-action:hover{box-shadow:0 0 1px 1px rgba(34,34,34,.1)}.preview-item .preview-item__actions .preview-item-action-cancel{color:#d39e00}.preview-item .preview-item__actions .preview-item-action-replay{color:#41b883}.preview-item .preview-item__actions .preview-item-action+.preview-item-action{margin-left:6px}.preview-item .preview-item__error{padding:0 10px 10px;color:#ff6a6a;font-size:14px}.preview-item .preview-item__error:empty,.preview-item .preview-item__progress{display:none}.preview-item.preview-item--queued .preview-item__actions .preview-item-action-cancel,.preview-item.preview-item--uploading .preview-item__actions .preview-item-action-cancel{display:block}.preview-item.preview-item--canceled .preview-item__information .preview-item__type span{background:#d39e00}.preview-item.preview-item--queued .preview-item__progress,.preview-item.preview-item--replay .preview-item-action-replay,.preview-item.preview-item--success .preview-item__progress,.preview-item.preview-item--uploading .preview-item__progress{display:block}.preview-item.preview-item--error .preview-item__information .preview-item__delete{display:none}.preview-item.preview-item--success .preview-item__information span{background:#41b883}.preview-item.preview-item--success .preview-item__delete{display:none}.preview-item.preview-item--success .preview-item-progress__line{width:100%;background-color:#41b883}.preview-item-progress{width:100%;border-radius:3px;height:6px;background-color:rgba(22,122,244,.2)}.preview-item-progress .preview-item-progress__line{width:0;height:6px;background-color:#167af4;border-radius:0 3px 3px 0;transition:.4s linear;background-size:60px 60px;transition-property:width,background-color}.preview-item-progress.preview-item-progress--processing .preview-item-progress__line{background-image:linear-gradient(135deg,hsla(0,0%,100%,.3) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.3) 0,hsla(0,0%,100%,.3) 75%,transparent 0,transparent);-webkit-animation:animate-stripes 1s linear infinite;animation:animate-stripes 1s linear infinite}@-webkit-keyframes animate-stripes{0%{background-position:0 0}to{background-position:60px 0}}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:60px 0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFDRSx3S0FBeUssQ0FDekssaUJBQWtCLENBQ2xCLHFCQUFzQixDQUN0QixrQ0FBdUMsQ0FDdkMsWUFBYSxDQUNiLGdCQUFpQixDQUNqQixlQUFrQixDQUNsQiw2QkFDRSxZQUFhLENBQ2IsbUNBQXFDLENBQ3JDLFFBQVMsQ0FDVCxZQUFlLENBQ2YsbUNBQ0UsWUFBZSxDQUNuQixpRUFDRSxlQUFrQixDQUV0QixVQUNFLHFCQUFzQixDQUN0QixpQkFBb0IsQ0FDcEIsNkJBQ0UsYUFBZ0IsQ0FDaEIsZ0RBQ0UsY0FBaUIsQ0FDakIsaUVBQ0UsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxXQUFZLENBQ1osU0FBVSxDQUNWLGNBQWlCLENBQ25CLGtFQUNFLGlCQUFrQixDQUNsQixpQkFBa0IsQ0FDbEIsY0FBZSxDQUNmLGFBQWMsQ0FDZCxVQUFXLENBQ1gsdUJBQTRCLENBQzVCLGlCQUFrQixDQUNsQixvQ0FBeUMsQ0FDekMscUNBQTBDLENBQzFDLHdDQUErQyxDQUNqRCx3RUFDRSxxQ0FBMEMsQ0FDMUMsd0NBQStDLENBQ25ELGlEQUNFLFlBQWEsQ0FDYixZQUFhLENBQ2IscUNBQTBDLENBQzFDLHFDQUEwQyxDQUMxQyxpQkFBa0IsQ0FDbEIsaUJBQWtCLENBQ2xCLHNCQUF1QixDQUN2QixrQkFBcUIsQ0FDckIsdURBQ0UsdUJBQXdCLENBQ3hCLGVBQWlCLENBQ2pCLHlCQUFnQyxDQUd0QyxnRkFDRSxZQUFlLENBQ2pCLHdEQUNFLFlBQWEsQ0FDYixZQUFhLENBQ2IsVUFBVyxDQUNYLFNBQVUsQ0FDVixLQUFRLENBQ1Ysc0RBQ0Usb0NBQXlDLENBQ3pDLGdDQUFxQyxDQUNyQyxrQkFBcUIsQ0FFekIsY0FDRSxVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLGtCQUFtQixDQUNuQixlQUFnQixDQUNoQixZQUFhLENBQ2IscUJBQXNCLENBQ3RCLFNBQVUsQ0FDVixpQkFBa0IsQ0FDbEIsa0NBQXNDLENBQ3RDLGlDQUNFLFNBQVksQ0FDZCx5Q0FDRSxZQUFhLENBQ2Isd0NBQXlDLENBQ3pDLGtCQUFtQixDQUNuQiw2QkFBOEIsQ0FDOUIsU0FBYyxDQUNkLDhEQUNFLGNBQWUsQ0FDZixnQkFBaUIsQ0FDakIsZUFBZ0IsQ0FDaEIsY0FBaUIsQ0FDbkIsNkRBQ0UsY0FBZSxDQUNmLGVBQWlCLENBQ2pCLGdCQUFtQixDQUNyQiw2REFDRSxpQkFBa0IsQ0FDbEIsY0FBZSxDQUNmLGdCQUFtQixDQUNuQixrRUFDRSxtQkFBb0IsQ0FDcEIsY0FBZSxDQUNmLGlCQUFrQixDQUNsQixnQkFBaUIsQ0FDakIsa0JBQW1CLENBQ25CLFVBQVcsQ0FDWCxpQkFBa0IsQ0FDbEIsd0JBQTJCLENBQ2pDLHFDQUNFLFdBQVksQ0FDWixPQUFRLENBQ1IsS0FBTSxDQUNOLFlBQWEsQ0FDYixXQUFZLENBQ1osa0JBQW1CLENBQ25CLDBCQUErQixDQUMvQiwwREFDRSxXQUFZLENBQ1osWUFBYSxDQUNiLGFBQWMsQ0FDZCxVQUFXLENBQ1gsV0FBWSxDQUNaLFNBQVUsQ0FDVixZQUFhLENBQ2IsaUJBQWtCLENBQ2xCLHFCQUFzQixDQUN0QixjQUFpQixDQUNqQiw4REFDRSxVQUFhLENBQ2YsZ0VBQ0Usd0NBQW1ELENBQ3ZELGlFQUNFLGFBQWdCLENBQ2xCLGlFQUNFLGFBQWdCLENBQ2xCLCtFQUNFLGVBQWtCLENBQ3RCLG1DQUVFLG1CQUFjLENBQ2QsYUFBYyxDQUNkLGNBQWlCLENBR25CLCtFQUNFLFlBQWUsQ0FDakIsK0tBQ0UsYUFBZ0IsQ0FDbEIseUZBQ0Usa0JBQXFCLENBR3ZCLG9QQUNFLGFBQWdCLENBQ2xCLG1GQUNFLFlBQWUsQ0FDakIsb0VBQ0Usa0JBQXFCLENBQ3ZCLDBEQUNFLFlBQWUsQ0FDakIsaUVBQ0UsVUFBVyxDQUNYLHdCQUEyQixDQUUvQix1QkFDRSxVQUFXLENBQ1gsaUJBQWtCLENBQ2xCLFVBQVcsQ0FDWCxvQ0FBMkMsQ0FDM0Msb0RBQ0UsT0FBUyxDQUNULFVBQVcsQ0FDWCx3QkFBeUIsQ0FDekIseUJBQTBCLENBQzFCLHFCQUF1QixDQUN2Qix5QkFBMEIsQ0FDMUIsMENBQThDLENBQ2hELHNGQUNFLG1LQUFtTSxDQUNuTSxvREFBNkMsQ0FBN0MsNENBQStDLENBRW5ELG1DQUNFLEdBQ0UsdUJBQTBCLENBQzVCLEdBQ0UsMEJBQTZCLENBQUUsQ0FKbkMsMkJBQ0UsR0FDRSx1QkFBMEIsQ0FDNUIsR0FDRSwwQkFBNkIsQ0FBRSIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZGVyIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxBcmlhbCxOb3RvIFNhbnMsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wsTm90byBDb2xvciBFbW9qaTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM0LCAzNCwgMzQsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBtYXgtd2lkdGg6IDgwMHB4OyB9XG4gIC51cGxvYWRlciAudXBsb2FkZXJfX3ByZXZpZXcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICBnYXA6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICAgIC51cGxvYWRlciAudXBsb2FkZXJfX3ByZXZpZXc6ZW1wdHkge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAudXBsb2FkZXIgLnVwbG9hZGVyX19wcmV2aWV3Om5vdCg6ZW1wdHkpICsgLnVwbG9hZGVyX19maWxlLW1hbmFnZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cblxuLmRyb3B6b25lIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5kcm9wem9uZSAuZHJvcHpvbmVfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmRyb3B6b25lIC5kcm9wem9uZV9fd3JhcHBlciAuZHJvcHpvbmVfX2NvbnRyb2wge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAuZHJvcHpvbmUgLmRyb3B6b25lX193cmFwcGVyIC5kcm9wem9uZV9fY29udHJvbCAuZHJvcHpvbmVfX2lucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5kcm9wem9uZSAuZHJvcHpvbmVfX3dyYXBwZXIgLmRyb3B6b25lX19jb250cm9sIC5kcm9wem9uZV9fYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTNweCAxOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjYpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDEyMiwgMjQ0LCAwLjIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyLCAxMjIsIDI0NCwgMC4wNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTgsIDMwLCA1NywgMC4xKTsgfVxuICAgICAgLmRyb3B6b25lIC5kcm9wem9uZV9fd3JhcHBlciAuZHJvcHpvbmVfX2NvbnRyb2w6aG92ZXIgLmRyb3B6b25lX19idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAxMjIsIDI0NCwgMC4yNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMTgsIDMwLCA1NywgMC4yKTsgfVxuICAgIC5kcm9wem9uZSAuZHJvcHpvbmVfX3dyYXBwZXIgLmRyb3B6b25lX19kcmFnem9uZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDEyMiwgMjQ0LCAwLjAzKTtcbiAgICAgIGJvcmRlcjogM3B4IGRhc2hlZCByZ2JhKDIyLCAxMjIsIDI0NCwgMC4xKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgLmRyb3B6b25lIC5kcm9wem9uZV9fd3JhcHBlciAuZHJvcHpvbmVfX2RyYWd6b25lOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiByZ2JhKDIyLCAxMjIsIDI0NCwgMC41KTsgfVxuICAuZHJvcHpvbmUuZHJvcHpvbmUtLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmRyb3B6b25lLmRyb3B6b25lLS1hY3RpdmUtZHJhZ3pvbmUgLmRyb3B6b25lX19jb250cm9sIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5kcm9wem9uZS5kcm9wem9uZS0tYWN0aXZlLWRyYWd6b25lIC5kcm9wem9uZV9fZHJhZ3pvbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogMDsgfVxuICAuZHJvcHpvbmUuZHJvcHpvbmUtLWRyb3AtZHJhZ3pvbmUgLmRyb3B6b25lX19kcmFnem9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMTIyLCAyNDQsIDAuMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIyLCAxMjIsIDI0NCwgMC4yKTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyB9XG5cbi5wcmV2aWV3LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDsgfVxuICAucHJldmlldy1pdGVtLnByZXZpZXctaXRlbS0tc2hvdyB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAucHJldmlldy1pdGVtIC5wcmV2aWV3LWl0ZW1fX2luZm9ybWF0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyZnIgYXV0byBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweDsgfVxuICAgIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9faW5mb3JtYXRpb24gLnByZXZpZXctaXRlbV9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcGFkZGluZzogMTVweCAwOyB9XG4gICAgLnByZXZpZXctaXRlbSAucHJldmlldy1pdGVtX19pbmZvcm1hdGlvbiAucHJldmlldy1pdGVtX19zaXplIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAucHJldmlldy1pdGVtIC5wcmV2aWV3LWl0ZW1fX2luZm9ybWF0aW9uIC5wcmV2aWV3LWl0ZW1fX3R5cGUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7IH1cbiAgICAgIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9faW5mb3JtYXRpb24gLnByZXZpZXctaXRlbV9fdHlwZSBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzE2N2FmNDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAucHJldmlldy1pdGVtIC5wcmV2aWV3LWl0ZW1fX2FjdGlvbnMge1xuICAgIGhlaWdodDogNTBweDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjsgfVxuICAgIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9fYWN0aW9ucyAucHJldmlldy1pdGVtLWFjdGlvbiB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLnByZXZpZXctaXRlbSAucHJldmlldy1pdGVtX19hY3Rpb25zIC5wcmV2aWV3LWl0ZW0tYWN0aW9uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNXB4OyB9XG4gICAgICAucHJldmlldy1pdGVtIC5wcmV2aWV3LWl0ZW1fX2FjdGlvbnMgLnByZXZpZXctaXRlbS1hY3Rpb246aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggcmdiYSgzNCwgMzQsIDM0LCAwLjEpOyB9XG4gICAgLnByZXZpZXctaXRlbSAucHJldmlldy1pdGVtX19hY3Rpb25zIC5wcmV2aWV3LWl0ZW0tYWN0aW9uLWNhbmNlbCB7XG4gICAgICBjb2xvcjogI2QzOWUwMDsgfVxuICAgIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9fYWN0aW9ucyAucHJldmlldy1pdGVtLWFjdGlvbi1yZXBsYXkge1xuICAgICAgY29sb3I6ICM0MWI4ODM7IH1cbiAgICAucHJldmlldy1pdGVtIC5wcmV2aWV3LWl0ZW1fX2FjdGlvbnMgLnByZXZpZXctaXRlbS1hY3Rpb24gKyAucHJldmlldy1pdGVtLWFjdGlvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4OyB9XG4gIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9fZXJyb3Ige1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgY29sb3I6ICNmZjZhNmE7XG4gICAgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgLnByZXZpZXctaXRlbSAucHJldmlldy1pdGVtX19lcnJvcjplbXB0eSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5wcmV2aWV3LWl0ZW0gLnByZXZpZXctaXRlbV9fcHJvZ3Jlc3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXF1ZXVlZCAucHJldmlldy1pdGVtX19hY3Rpb25zIC5wcmV2aWV3LWl0ZW0tYWN0aW9uLWNhbmNlbCwgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXVwbG9hZGluZyAucHJldmlldy1pdGVtX19hY3Rpb25zIC5wcmV2aWV3LWl0ZW0tYWN0aW9uLWNhbmNlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLWNhbmNlbGVkIC5wcmV2aWV3LWl0ZW1fX2luZm9ybWF0aW9uIC5wcmV2aWV3LWl0ZW1fX3R5cGUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogI2QzOWUwMDsgfVxuICAucHJldmlldy1pdGVtLnByZXZpZXctaXRlbS0tcmVwbGF5IC5wcmV2aWV3LWl0ZW0tYWN0aW9uLXJlcGxheSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXF1ZXVlZCAucHJldmlldy1pdGVtX19wcm9ncmVzcywgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXVwbG9hZGluZyAucHJldmlldy1pdGVtX19wcm9ncmVzcywgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXN1Y2Nlc3MgLnByZXZpZXctaXRlbV9fcHJvZ3Jlc3Mge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5wcmV2aWV3LWl0ZW0ucHJldmlldy1pdGVtLS1lcnJvciAucHJldmlldy1pdGVtX19pbmZvcm1hdGlvbiAucHJldmlldy1pdGVtX19kZWxldGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXN1Y2Nlc3MgLnByZXZpZXctaXRlbV9faW5mb3JtYXRpb24gc3BhbiB7XG4gICAgYmFja2dyb3VuZDogIzQxYjg4MzsgfVxuICAucHJldmlldy1pdGVtLnByZXZpZXctaXRlbS0tc3VjY2VzcyAucHJldmlldy1pdGVtX19kZWxldGUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnByZXZpZXctaXRlbS5wcmV2aWV3LWl0ZW0tLXN1Y2Nlc3MgLnByZXZpZXctaXRlbS1wcm9ncmVzc19fbGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxYjg4MzsgfVxuXG4ucHJldmlldy1pdGVtLXByb2dyZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDEyMiwgMjQ0LCAwLjIpOyB9XG4gIC5wcmV2aWV3LWl0ZW0tcHJvZ3Jlc3MgLnByZXZpZXctaXRlbS1wcm9ncmVzc19fbGluZSB7XG4gICAgd2lkdGg6IDAlO1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjdhZjQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGJhY2tncm91bmQtY29sb3I7IH1cbiAgLnByZXZpZXctaXRlbS1wcm9ncmVzcy5wcmV2aWV3LWl0ZW0tcHJvZ3Jlc3MtLXByb2Nlc3NpbmcgLnByZXZpZXctaXRlbS1wcm9ncmVzc19fbGluZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZS1zdHJpcGVzIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtc3RyaXBlcyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNjBweCAwOyB9IH1cbiJdfQ== */";
styleInject(css_248z);

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

class Dom {
    static append($element, ...children) {
        for (const child of children) {
            if (child instanceof Node) {
                $element.appendChild(child);
            }
            else {
                $element.textContent = child ? child.toString() : '';
            }
        }
        return $element;
    }
    static make(tagName, options, ...children) {
        const $element = document.createElement(tagName);
        if (options) {
            const { className = [], dataset = {}, ...attr } = options;
            if (Array.isArray(className)) {
                $element.classList.add(...className);
            }
            else if (className) {
                $element.classList.add(className);
            }
            const attributes = attr;
            for (const attrName in attributes) {
                if (Object.prototype.hasOwnProperty.call(attributes, attrName)) {
                    $element[attrName] = attributes[attrName];
                }
            }
            Dom.setDateset($element, dataset);
        }
        Dom.append($element, ...children);
        return $element;
    }
    static setDateset($element, dataset) {
        for (const key in dataset) {
            if (Object.prototype.hasOwnProperty.call(dataset, key)) {
                $element.dataset[key] = dataset[key];
            }
        }
    }
}

const make = Dom.make;
const append = Dom.append;
function checkAccept(type, accepts) {
    for (const accept of Array.isArray(accepts) ? accepts : [accepts]) {
        if (accept === '*' || type.match(accept)) {
            return true;
        }
    }
    return false;
}
function generateId(prefix = '') {
    return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function filesizeformat(bytes, binary = false, precision = 2) {
    const base = binary ? 1000 : 1024;
    const prefixes = [binary ? 'KiB' : 'kB', binary ? 'MiB' : 'MB', binary ? 'GiB' : 'GB', binary ? 'TiB' : 'TB', binary ? 'PiB' : 'PB', binary ? 'EiB' : 'EB', binary ? 'ZiB' : 'ZB', binary ? 'YiB' : 'YB'];
    if (!Number.isFinite(bytes)) {
        return [Infinity, 'B'];
    }
    if (bytes === 1) {
        return [1, 'B'];
    }
    if (bytes < base) {
        return [bytes, 'B'];
    }
    const index = Math.floor(Math.log(bytes) / Math.log(base));
    const size = parseFloat((bytes / base ** Math.floor(index)).toFixed(precision));
    return [size, prefixes[index - 1]];
}
function extract(keys, obj) {
    const newObj = {};
    for (const key of keys) {
        newObj[key] = obj[key];
    }
    return newObj;
}
function errorTemplate(template, data) {
    let message = template;
    for (const attribute of Object.keys(data)) {
        message = message.replace(new RegExp(`:${attribute}`, 'g'), data[attribute]);
    }
    return message;
}
function cleaerClassName(nodes, classLists) {
    for (const key in nodes) {
        if (Object.prototype.hasOwnProperty.call(nodes, key)) {
            const node = nodes[key];
            let classList = classLists[key] ? classLists[key] : '';
            classList = Array.isArray(classList) ? classList : [classList];
            node.classList.remove(...classList);
        }
    }
}
function destroyHtml(nodes, classLists) {
    cleaerClassName(nodes, classLists);
    const { container } = nodes;
    for (const key in nodes) {
        if (Object.prototype.hasOwnProperty.call(nodes, key)) {
            const node = nodes[key];
            if (container !== node) {
                node.remove();
            }
        }
    }
}
function reactive(obj, notify) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // const element = obj[key];
            notify(obj, key, obj[key]);
        }
    }
    return new Proxy(obj, {
        get(target, phrase) {
            // eslint-disable-next-line no-restricted-syntax
            if (phrase in target) {
                return target[phrase];
            }
            return undefined;
        },
        set(target, prop, val) {
            let modif = false;
            if (val !== target[prop]) {
                modif = true;
            }
            target[prop] = val;
            if (modif) {
                notify(obj, prop, val);
            }
            return true;
        }
    });
}
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== 'function')) {
        throw new TypeError(`Only methods can be decorated with @bind. <${propertyKey}> is not a method!`);
    }
    return {
        configurable: true,
        get() {
            // @ts-ignore
            const bound = descriptor.value.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: true,
                writable: true
            });
            return bound;
        }
    };
}

function isDirectory(entry) {
    return entry.isDirectory;
}
function isFile(entry) {
    return entry.isFile;
}
function readDirectoryReader(reader) {
    return new Promise((resolve) => {
        reader.readEntries((entries) => {
            resolve(entries);
        });
    });
}
function readEntryFile(entry) {
    return new Promise((resolve) => {
        if (isFile(entry)) {
            entry.file(file => {
                resolve(file);
            });
        }
    });
}
async function getFilesAsync(dataTransfer) {
    const fileEntrys = [];
    const files = [];
    function readEntry(entry) {
        return new Promise((resolve) => {
            if (isFile(entry)) {
                fileEntrys.push(entry);
                resolve();
            }
        });
    }
    async function scanFiles(item) {
        if (isDirectory(item)) {
            const directoryReader = item.createReader();
            const entries = await readDirectoryReader(directoryReader);
            for await (const entry of entries) {
                await scanFiles(entry);
            }
        }
        else if (isFile(item)) {
            await readEntry(item);
        }
    }
    for await (const item of Array.from(dataTransfer.items)) {
        if (item.kind === 'file') {
            if (typeof item.webkitGetAsEntry === 'function') {
                const entry = item.webkitGetAsEntry();
                await scanFiles(entry);
            }
            else {
                const file = item.getAsFile();
                if (file) {
                    files.push(file);
                }
            }
        }
    }
    for await (const entry of fileEntrys) {
        const file = await readEntryFile(entry);
        files.push(file);
    }
    return files;
}

var StatusUploadApi;
(function (StatusUploadApi) {
    StatusUploadApi["SUCCESS"] = "success";
    StatusUploadApi["ERROR"] = "error";
    StatusUploadApi["CANCEL"] = "cancel";
})(StatusUploadApi || (StatusUploadApi = {}));
var STATUS_UPLOADER;
(function (STATUS_UPLOADER) {
    STATUS_UPLOADER["NOT_READY"] = "notReady";
    STATUS_UPLOADER["WAITING"] = "waiting";
    STATUS_UPLOADER["SELECTED"] = "selected";
    STATUS_UPLOADER["UPLOADING"] = "uploading";
    STATUS_UPLOADER["UPLOADED"] = "uploaded";
    STATUS_UPLOADER["DISABLED"] = "disabled";
})(STATUS_UPLOADER || (STATUS_UPLOADER = {}));
var FILE_STATUS;
(function (FILE_STATUS) {
    FILE_STATUS["ADDED"] = "added";
    FILE_STATUS["PREVIEWS"] = "previews";
    FILE_STATUS["QUEUED"] = "queued";
    FILE_STATUS["UPLOADING"] = "uploading";
    FILE_STATUS["SUCCESS"] = "success";
    FILE_STATUS["ERROR"] = "error";
    FILE_STATUS["ERROR_UPLOAD"] = "errorUpload";
    FILE_STATUS["CANCELED"] = "canceled";
    // DELETED = 'deleted',
})(FILE_STATUS || (FILE_STATUS = {}));
var EventUploaderType;
(function (EventUploaderType) {
    EventUploaderType["INIT"] = "init";
    EventUploaderType["SELECTED"] = "selected";
    EventUploaderType["UNLOADING"] = "unloading";
    EventUploaderType["LOADED"] = "loaded";
    EventUploaderType["ERROR"] = "error";
    EventUploaderType["UPLOADED"] = "uploaded";
    EventUploaderType["CANCEL"] = "cancel";
    EventUploaderType["REPLAY"] = "replay";
    EventUploaderType["BEFORE_DESTROYED"] = "beforeDestroyed";
    EventUploaderType["CLEAR"] = "clear";
    EventUploaderType["DESTROYED"] = "destroyed";
})(EventUploaderType || (EventUploaderType = {}));

// export interface FileManagerPrivateApi extends FileManagerApi {
// 	_onSeleced(files: FileList): void;
// }
class FileManagerBase {
    constructor(uploaderApi) {
        this.uploaderApi = uploaderApi;
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    destroy() {
        throw new Error('Method not implemented.');
    }
    set accept(value) {
        throw new Error('Not prop accept');
    }
    ;
    set count(value) {
        throw new Error('Not prop count');
    }
    ;
    input() {
        throw new Error('Method not implemented.');
    }
    onSeleced(files) {
        this.uploaderApi.createEvent(EventUploaderType.SELECTED, { files: Array.from(files) });
    }
}
// export class FileManagerBase {
// 	// protected _disabled: boolean = false;
// 	constructor(protected _uploaderApi: UploaderPrivateApi) { }
// 	public get disabled(): boolean {
// 		return this._disabled;
// 	}
// 	public set disabled(value: boolean) {
// 		this._disabled = value;
// 	}
// 	public destroy() {
// 		throw new Error('Not prop destroy');
// 	}
// 	set accept(value: string | string[]) {
// 		throw new Error('Not prop accept');
// 	}
// 	set count(value: number) {
// 		throw new Error('Not prop count');
// 	}
// 	input() {
// 		throw new Error('Not init method input');
// 	};
// }

const defaultOptionDropzone = {
    accept: '*',
    count: 1,
    string: {
        buttonUplaod: 'Загрузить файл',
        dropzoneDrag: 'Перетащите файл сюда или загрузите вручную',
        dropzoneDrop: 'Отпустите кнопку мыши, чтобы прикрепить файл/лы'
    }
};
class Dropzone extends FileManagerBase {
    constructor($el, uploaderApi, option = {}) {
        super(uploaderApi);
        this.listeners = [];
        this.option = cjs(defaultOptionDropzone, option);
        this.nodes = {
            container: $el,
            wrapper: make('div', { className: [this.css.wrapper] }),
            dragZone: make('div', { className: [this.css.dragZone] }),
            control: make('div', { className: [this.css.control] }),
            button: make('button', { className: [this.css.button], type: 'button' }, this.option.string.buttonUplaod),
            input: make('input', {
                className: [this.css.input],
                type: 'file',
                accept: Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept,
                multiple: this.option.count > 1
            })
        };
        this.render();
        this.listener();
        this.state = reactive({
            textDropZone: this.option.string.dropzoneDrag
        }, (obj, prop, val) => {
            switch (prop) {
                case 'textDropZone':
                    this.nodes.dragZone.dataset.text = val;
                    break;
            }
        });
    }
    get css() {
        return {
            container: 'dropzone',
            wrapper: 'dropzone__wrapper',
            dragZone: 'dropzone__dragzone',
            control: 'dropzone__control',
            button: 'dropzone__button',
            input: 'dropzone__input',
            hide: 'dropzone--hide',
            activeDragzone: 'dropzone--active-dragzone',
            dropDragzone: 'dropzone--drop-dragzone'
        };
    }
    listener() {
        this.addEvent(this.nodes.input, 'input', e => {
            const target = e.target;
            if (target && target.files) {
                this.onSeleced(Array.from(target.files));
            }
        });
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            this.addEvent(this.nodes.wrapper, eventName, this.preventDefaults);
        });
        ['dragover', 'dragenter'].forEach(eventName => {
            this.addEvent(document.body, eventName, this.bodyDragOverHandler);
            this.addEvent(this.nodes.dragZone, eventName, this.dragOverHandler);
        });
        ['dragleave', 'dragend'].forEach(eventName => {
            this.addEvent(document.body, eventName, this.bodyDragLeaveHandler);
            this.addEvent(this.nodes.dragZone, eventName, this.dragLeaveHandler);
        });
        ['drop'].forEach(eventName => {
            this.addEvent(this.nodes.dragZone, eventName, this.dropHandler);
        });
        ['paste'].forEach(eventName => {
            this.addEvent(document.body, eventName, this.pasteHandler);
        });
    }
    onSeleced(files) {
        if (this.disabled !== true) {
            super.onSeleced(files);
        }
    }
    render() {
        const { container, wrapper, dragZone, input, button, control } = this.nodes;
        container.classList.add(this.css.container);
        append(control, input, button);
        append(wrapper, dragZone, control);
        append(container, wrapper);
        // this.status = true;
    }
    destroy() {
        for (const id of this.listeners) {
            this.uploaderApi.listeners.offById(id);
        }
        destroyHtml(this.nodes, this.css);
    }
    addEvent($el, type, handler) {
        this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
    }
    removeEvent($el, type, handler) {
        const event = this.uploaderApi.listeners.findOne($el, type, handler);
        if (!event) {
            return;
        }
        const index = this.listeners.findIndex(eventId => eventId === event.id);
        this.uploaderApi.listeners.offById(event.id);
        this.listeners = this.listeners.slice(index, 1);
    }
    set disabled(value) {
        this.nodes.container.classList.toggle(this.css.hide, value);
        this._disabled = value;
    }
    set accept(value) {
        this.option.accept = value;
        const input = this.nodes.input;
        input.accept = Array.isArray(this.option.accept) ? this.option.accept.join(', ') : this.option.accept;
    }
    set count(value) {
        this.option.count = value;
        const input = this.nodes.input;
        input.multiple = this.option.count > 1;
    }
    input() {
        if (this.disabled !== true) {
            this.nodes.input.click();
        }
    }
    preventDefaults(e) {
        e.preventDefault();
        // e.stopPropagation();
    }
    bodyDragOverHandler(e) {
        this.toogleDropzone(true);
    }
    bodyDragLeaveHandler(e) {
        const relatedTarget = e.relatedTarget;
        if (!document.body.contains(relatedTarget)) {
            this.toogleDropzone(false);
        }
    }
    dragOverHandler() {
        this.toogleDropDropzone();
    }
    dragLeaveHandler(e) {
        const relatedTarget = e.relatedTarget;
        if (!this.nodes.dragZone.contains(relatedTarget)) {
            this.toogleDropDropzone(false);
        }
    }
    async dropHandler(event) {
        this.toogleDropzone(false);
        this.toogleDropDropzone(false);
        const files = [];
        for (const file of await getFilesAsync(event.dataTransfer)) {
            files.push(file);
        }
        this.onSeleced(files);
    }
    async pasteHandler(event) {
        event.preventDefault();
        const files = [];
        for (const file of await getFilesAsync(event.clipboardData)) {
            files.push(file);
        }
        this.onSeleced(files);
    }
    toogleDropzone(show = true) {
        this.state.textDropZone = this.option.string.dropzoneDrop;
        this.nodes.container.classList.toggle(this.css.activeDragzone, show);
    }
    toogleDropDropzone(active = true) {
        this.state.textDropZone = active ? this.option.string.dropzoneDrop : this.option.string.dropzoneDrag;
        this.nodes.container.classList.toggle(this.css.dropDragzone, active);
    }
}
__decorate([
    bind
], Dropzone.prototype, "bodyDragOverHandler", null);
__decorate([
    bind
], Dropzone.prototype, "bodyDragLeaveHandler", null);
__decorate([
    bind
], Dropzone.prototype, "dragOverHandler", null);
__decorate([
    bind
], Dropzone.prototype, "dragLeaveHandler", null);
__decorate([
    bind
], Dropzone.prototype, "dropHandler", null);
__decorate([
    bind
], Dropzone.prototype, "pasteHandler", null);
__decorate([
    bind
], Dropzone.prototype, "toogleDropzone", null);
__decorate([
    bind
], Dropzone.prototype, "toogleDropDropzone", null);

var CancelIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">  <defs/>  <path fill="currentColor"  d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z"/></svg>';

var ReplayIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.25 497.25">  <defs/>  <path fill="currentColor" d="M248.625 89.25V0l-127.5 127.5 127.5 127.5V140.25c84.15 0 153 68.85 153 153s-68.85 153-153 153-153-68.85-153-153h-51c0 112.2 91.8 204 204 204s204-91.8 204-204-91.8-204-204-204z"/></svg>';

class PreviewItem {
    constructor(_file, id, uploaderApi) {
        this._file = _file;
        this.id = id;
        this.uploaderApi = uploaderApi;
        this._error = null;
        this._progress = 0;
        this.listeners = [];
        this._isReplay = false;
        this._status = FILE_STATUS.ADDED;
        this.nodes = {
            container: make('div', { className: this.css.container }),
            information: make('div', { className: this.css.information }),
            progressContainer: make('div', { className: this.css.progressContainer }),
            progressLine: make('div', { className: this.css.progressLine }),
            actions: make('div', { className: this.css.actions }),
            actionCancel: make('button', { className: this.css.actionCancel }),
            actionReplay: make('button', { className: this.css.actionReplay }),
            error: make('div', { className: this.css.error })
        };
    }
    get css() {
        return {
            container: 'preview-item',
            // progress: 'preview-item__progress',
            information: 'preview-item__information',
            title: 'preview-item__title',
            size: 'preview-item__size',
            type: 'preview-item__type',
            actions: 'preview-item__actions',
            actionCancel: ['preview-item-action', 'preview-item-action-cancel'],
            actionReplay: ['preview-item-action', 'preview-item-action-replay'],
            show: 'preview-item--show',
            error: 'preview-item__error',
            progressContainer: ['preview-item__progress', 'preview-item-progress'],
            progressLine: 'preview-item-progress__line',
            progressProcessing: 'preview-item-progress--processing',
            isReplay: ['preview-item--replay']
        };
    }
    get file() {
        return this._file;
    }
    set error(value) {
        this._error = value;
        if (value.length > 0) {
            this.status = FILE_STATUS.ERROR;
        }
        this.nodes.error.innerText = this._error;
    }
    get isReplay() {
        return this._isReplay;
    }
    set isReplay(value) {
        this._isReplay = value;
        const className = Array.isArray(this.css.isReplay) ? this.css.isReplay[0] : this.css.isReplay;
        this.nodes.container.classList.toggle(className, value);
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
        for (const key in FILE_STATUS) {
            if (Object.prototype.hasOwnProperty.call(FILE_STATUS, key)) {
                // @ts-ignore
                const status = FILE_STATUS[key];
                this.nodes.container.classList.toggle(`${this.css.container}--${status.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`, this.status === status);
            }
        }
        this.nodes.progressContainer.classList.remove(this.css.progressProcessing);
    }
    set progress(value) {
        const { progressLine } = this.nodes;
        progressLine.style.width = `${value}%`;
        this._progress = value;
        if (value === 100) {
            this.nodes.progressContainer.classList.add(this.css.progressProcessing);
        }
    }
    destroy() {
        for (const id of this.listeners) {
            this.uploaderApi.listeners.offById(id);
        }
        destroyHtml(this.nodes, this.css);
        this.nodes.container.remove();
    }
    addEvent($el, type, handler) {
        this.listeners.push(this.uploaderApi.listeners.on($el, type, handler));
    }
    removeEvent($el, type, handler) {
        const event = this.uploaderApi.listeners.findOne($el, type, handler);
        if (!event) {
            return;
        }
        const index = this.listeners.findIndex(eventId => eventId === event.id);
        this.uploaderApi.listeners.offById(event.id);
        this.listeners = this.listeners.slice(index, 1);
    }
    render() {
        const { container } = this.nodes;
        const { information, error } = this.nodes;
        const { name, size } = this.file;
        const type = /[^.]+$/.exec(this.file.type);
        this.nodes.type = make('div', { className: this.css.type }, make('span', null, type ? type.toString() : 'unknown'));
        this.nodes.title = make('div', { className: this.css.title }, name);
        this.nodes.size = make('div', { className: this.css.size }, filesizeformat(size).join(' '));
        // this.nodes.a = make('div', { className: this.css.size }, filesizeformat(size).join(' '));
        const { actions, actionCancel, actionReplay } = this.nodes;
        actionCancel.innerHTML = CancelIcon;
        actionReplay.innerHTML = ReplayIcon;
        append(actions, actionCancel, actionReplay);
        append(information, this.nodes.type, this.nodes.title, this.nodes.size, actions);
        this.addEvent(actionCancel, 'click', event => {
            event.preventDefault();
            if ([FILE_STATUS.ADDED, FILE_STATUS.QUEUED, FILE_STATUS.UPLOADING].includes(this.status)) {
                this.uploaderApi.createEvent(EventUploaderType.CANCEL, { preview: this });
                this.status = FILE_STATUS.CANCELED;
                this.isReplay = true;
            }
        });
        this.addEvent(actionReplay, 'click', event => {
            event.preventDefault();
            if (this.isReplay) {
                this.status = FILE_STATUS.QUEUED;
                this.progress = 0;
                this.uploaderApi.createEvent(EventUploaderType.REPLAY, { preview: this });
                this.error = '';
                this.isReplay = false;
            }
        });
        append(container, information);
        append(container, error);
        const { progressContainer, progressLine } = this.nodes;
        append(progressContainer, progressLine);
        append(container, progressContainer);
        this.progress = 0;
        return container;
    }
    show() {
        this.nodes.container.classList.add(this.css.show);
    }
}

class Previews {
    constructor($container, uploaderApi) {
        this.$container = $container;
        this.uploaderApi = uploaderApi;
        this.items = new Map();
    }
    newPreview(file) {
        const preview = new PreviewItem(file, generateId('file'), this.uploaderApi);
        this.items.set(preview.id, preview);
        return preview;
    }
    render(preview) {
        append(this.$container, preview.render());
        setTimeout(() => preview.show(), 0);
        if (FILE_STATUS.ADDED === preview.status) {
            preview.status = FILE_STATUS.QUEUED;
        }
    }
    destroy() {
        this.clear();
    }
    removePreviewItem(id) {
        const preview = this.items.get(id);
        if (preview) {
            preview.destroy();
            this.items.delete(id);
        }
    }
    async clear() {
        for await (const preview of this.items.values()) {
            preview.destroy();
        }
        this.items.clear();
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
class DefaultUploadConstructors {
    constructor(file, previewApi) {
        this.file = file;
        this.previewApi = previewApi;
        this.interval = null;
    }
    ;
    send() {
        return new Promise((resolve, reject) => {
            let percent = 0;
            // @ts-ignore
            this.interval = setInterval(() => {
                percent++;
                this.previewApi.updatePercent(percent);
                if (percent === 100) {
                    const reader = new FileReader();
                    clearInterval(this.interval);
                    reader.onload = e => {
                        setTimeout(() => {
                            if (getRndInteger(1, 100) < 50) {
                                resolve(e.target.result);
                            }
                            else {
                                reject(new Error('Ошибка загрузки'));
                            }
                        }, 1000);
                    };
                    reader.readAsDataURL(this.file);
                }
            }, 0);
        });
    }
    destroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

class Listeners {
    constructor() {
        this.listeners = [];
    }
    on(element, eventType, handler) {
        const id = generateId('event');
        const assignedEventData = {
            id,
            element,
            eventType,
            handler
        };
        const alreadyExist = this.findOne(element, eventType, handler);
        if (alreadyExist) {
            return alreadyExist.id;
        }
        this.listeners.push(assignedEventData);
        element.addEventListener(eventType, handler);
        return id;
    }
    off(element, eventType, handler) {
        const existingListeners = this.findAll(element, eventType, handler);
        existingListeners.forEach((listener, i) => {
            const index = this.listeners.indexOf(existingListeners[i]);
            if (index > 0) {
                this.listeners.splice(index, 1);
                listener.element.removeEventListener(listener.eventType, listener.handler);
            }
        });
    }
    offById(id) {
        const listener = this.findById(id);
        if (!listener) {
            return;
        }
        listener.element.removeEventListener(listener.eventType, listener.handler);
    }
    findOne(element, eventType, handler) {
        const foundListeners = this.findAll(element, eventType, handler);
        return foundListeners.length > 0 ? foundListeners[0] : null;
    }
    findAll(element, eventType, handler) {
        let found;
        const foundByEventTargets = element ? this.findByEventTarget(element) : [];
        if (element && eventType && handler) {
            found = foundByEventTargets.filter(event => event.eventType === eventType && event.handler === handler);
        }
        else if (element && eventType) {
            found = foundByEventTargets.filter(event => event.eventType === eventType);
        }
        else {
            found = foundByEventTargets;
        }
        return found;
    }
    findByEventTarget(element) {
        return this.listeners.filter(listener => {
            if (listener.element === element) {
                return listener;
            }
            return false;
        });
    }
    findById(id) {
        return this.listeners.find(listener => listener.id === id);
    }
    removeAll() {
        this.listeners.forEach(current => {
            current.element.removeEventListener(current.eventType, current.handler);
        });
        this.listeners = [];
    }
    destroy() {
        this.removeAll();
    }
}

class Emitter {
    constructor($el, id = generateId('uploader')) {
        this.$el = $el;
        this.id = id;
        this.listeners = new Listeners();
        this.callbacks = [];
        this.listeners.on(this.$el, id, this.dispatch.bind(this));
    }
    on(event, handler) {
        this.callbacks.push({ event, handler });
        return this;
    }
    off(event, handler) {
        const index = this.callbacks.findIndex(item => item.event === event && item.handler === handler);
        this.callbacks.slice(index, 1);
        return this;
    }
    dispatch(event) {
        const { type, values } = event.detail;
        this.callbacks.forEach(item => {
            if (item.event === type) {
                item.handler(values);
            }
        });
    }
    createEvent(type, values) {
        // console.log(type, values);
        const event = new CustomEvent(`${this.id}`, { detail: { type, values } });
        this.$el.dispatchEvent(event);
    }
}
__decorate([
    bind
], Emitter.prototype, "createEvent", null);

const defaultOption = cjs(defaultOptionDropzone, {
    fileSize: 1048576 * 15,
    errors: {
        accept: 'Должно быть файлом одного из следующих типов: :values.',
        fileSize: 'Размер файла не может быть больше :max.'
    },
    upload: DefaultUploadConstructors
});
class Uploader extends Emitter {
    constructor($el, option = {}) {
        super($el);
        this.nodes = {};
        this._files = new Map();
        this._disabled = false;
        this._status = STATUS_UPLOADER.NOT_READY;
        this._multiple = false;
        this.option = cjs(defaultOption, option);
        this.nodes.container = $el;
        const api = this.api;
        const wrapper = make('div', { className: this.css.wrapper });
        const preview = make('div', { className: this.css.preview });
        const fileManager = make('div', { className: this.css.fileManager });
        this._multiple = this.option.count > 1;
        this.previews = new Previews(preview, api);
        this.fileManager = new Dropzone(fileManager, api, extract(['accept', 'string', 'count'], this.option));
        this.nodes.wrapper = wrapper;
        this.nodes.preview = preview;
        this.nodes.fileManager = fileManager;
        this.on(EventUploaderType.SELECTED, ({ files }) => {
            this.seleced(files);
        });
        setTimeout(() => this.createEvent(EventUploaderType.INIT), 0);
        this.render();
        this._status = STATUS_UPLOADER.WAITING;
        this.on(EventUploaderType.REPLAY, () => {
            if (this.status === STATUS_UPLOADER.WAITING) {
                this.uploaders();
            }
        });
    }
    get css() {
        return {
            container: 'uploader',
            wrapper: 'uploader__wrapper',
            fileManager: 'uploader__file-manager',
            preview: 'uploader__preview',
            disabled: 'uploader--disabled'
        };
    }
    get api() {
        const self = this;
        return {
            on: (...args) => {
                self.on(...args);
            },
            off: (...args) => {
                self.off(...args);
            },
            listeners: this.listeners,
            createEvent: this.createEvent,
        };
    }
    get files() {
        return this._files;
    }
    addFile(id, value) {
        if (this.option.count === 1) {
            this.files.clear();
        }
        this.files.set(id, value);
    }
    render() {
        const { container, wrapper, preview, fileManager } = this.nodes;
        container.classList.add(this.css.container);
        append(wrapper, preview, fileManager);
        append(container, wrapper);
    }
    async seleced(files) {
        if (this.status === STATUS_UPLOADER.WAITING) {
            await this.previews.clear();
            this.files.clear();
            if (this._multiple) {
                files = files.slice(0, this.option.count);
            }
            else {
                files = files.slice(0, 1);
            }
            this._status = STATUS_UPLOADER.SELECTED;
        }
        if (files.length < 1) {
            this.uploaders();
            return;
        }
        this.fileManager.disabled = true;
        const file = files.shift();
        const preview = this.previews.newPreview(file);
        if (!checkAccept(preview.file.type, this.option.accept)) {
            preview.error = errorTemplate(this.option.errors.accept, {
                values: Array.isArray(this.option.accept) ? this.option.accept.join(',') : this.option.accept
            });
        }
        if (preview.file.size > this.option.fileSize) {
            preview.error = errorTemplate(this.option.errors.fileSize, {
                max: filesizeformat(this.option.fileSize).join('')
            });
        }
        if (preview.status === FILE_STATUS.ERROR) {
            this.createEvent(EventUploaderType.ERROR, { error: new Error(preview.error), preview });
        }
        this.previews.render(preview);
        await this.seleced(files);
    }
    async uploaders() {
        const preview = Array.from(this.previews.items.values()).find(({ status }) => status === FILE_STATUS.QUEUED);
        if (preview) {
            preview.status = FILE_STATUS.UPLOADING;
            const response = await this.uplaodItem(preview);
            if (response.status === StatusUploadApi.ERROR) {
                preview.error = response.error.message;
                preview.isReplay = true;
                this.createEvent(EventUploaderType.ERROR, { error: new Error(response.error.message), preview });
            }
            if (response.status === StatusUploadApi.SUCCESS) {
                this.addFile(preview.id, response.result);
                preview.status = FILE_STATUS.SUCCESS;
                this.createEvent(EventUploaderType.LOADED, {
                    file: response.result
                });
            }
            await this.uploaders();
        }
        else {
            this.createEvent(EventUploaderType.UPLOADED, { value: this.value });
            this._status = STATUS_UPLOADER.WAITING;
            this.enabledFileManaged();
        }
    }
    uplaodItem(preview) {
        return new Promise(async (resolve) => {
            const UploadConstructor = this.option.upload;
            const uplaodApi = new UploadConstructor(preview.file, {
                updatePercent: (percent) => {
                    preview.progress = percent;
                    this.createEvent(EventUploaderType.UNLOADING, {
                        preview
                    });
                }
            });
            const cancel = () => {
                uplaodApi.destroy();
                resolve({ status: StatusUploadApi.CANCEL });
            };
            this.on(EventUploaderType.BEFORE_DESTROYED, cancel);
            this.on(EventUploaderType.CANCEL, cancel);
            // this.on(EventUploaderType., cancel);
            let response;
            try {
                const result = await uplaodApi.send();
                response = { status: StatusUploadApi.SUCCESS, result };
            }
            catch (error) {
                response = { status: StatusUploadApi.ERROR, error };
            }
            this.off(EventUploaderType.BEFORE_DESTROYED, uplaodApi.destroy);
            resolve(response);
        });
    }
    enabledFileManaged() {
        this.fileManager.disabled = false;
    }
    destroy() {
        this.createEvent(EventUploaderType.BEFORE_DESTROYED);
        this.fileManager.destroy();
        this.previews.destroy();
        this.listeners.destroy();
        destroyHtml(this.nodes, this.css);
    }
    setDisabled(value) {
        this.disabled = value;
        this.nodes.container.classList.toggle(this.css.disabled, value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this.setDisabled(value);
    }
    set accept(value) {
        if (this.status !== STATUS_UPLOADER.WAITING) {
            throw new Error();
        }
        this.option.accept = value;
        this.fileManager.accept = this.option.accept;
    }
    get count() {
        return this.option.count;
    }
    set count(value) {
        if (this.status !== STATUS_UPLOADER.WAITING) {
            throw new Error();
        }
        this.option.count = value;
        this._multiple = this.option.count > 1;
        this.fileManager.count = this.option.count;
    }
    set upload(value) {
        if (this.status !== STATUS_UPLOADER.WAITING) {
            throw new Error();
        }
        this.option.upload = value;
    }
    set fileSize(value) {
        if (this.status !== STATUS_UPLOADER.WAITING) {
            throw new Error();
        }
        this.option.fileSize = value;
    }
    get status() {
        return this._status;
    }
    input() {
        this.fileManager.input();
    }
    get value() {
        const files = Array.from(this.files.entries()).map((([, file]) => file));
        return this._multiple ? files : files.pop();
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this.count = value ? 2 : 1;
    }
    clear() {
        this.previews.clear();
        this.createEvent(EventUploaderType.CLEAR);
    }
}

export default Uploader;
export { DefaultUploadConstructors };
//# sourceMappingURL=index.es.js.map
