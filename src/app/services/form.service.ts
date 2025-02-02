import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formUrl = 'https://accounts.mail.ir/app/sign-up'; // Replace with actual URL

  constructor(private http: HttpClient) {}

  getFormData(): Observable<any> {
    // set mock becuse cors error
    // return this.http.get(this.formUrl);
    return of({"form":{"name":"signup","title":"Base Information","submitLabel":"Register","nestedFormShowType":"MAIN_FORM","fieldDescriptionShowType":"TOOLTIP","fields":[{"@type":".input.TextField","name":"identifier","title":"Mobile number","description":"Enter your mobile number with which you registered in the system","errorMessage":"The entered identifier is not valid","required":true,"minLength":3,"maxLength":40,"type":"TEXT"},{"@type":".input.TextField","name":"username","title":"Username","description":"The entry argument must have English Lowercase Letters.","descriptionShowType":"TOOLTIP","errorMessage":"username must have Lowercase and minimum 3characters and maximum 15 characters","required":true,"regex":"^([a-zA-Z])([a-zA-Z0-9.]){5,30}$","minLength":5,"maxLength":15,"type":"TEXT"},{"@type":".input.TextField","name":"first_name","title":"Name","description":"Enter name","errorMessage":"First name must be english with at least two characters and maximum 30 characters.","required":true,"regex":"^[a-zA-Z]+$","minLength":2,"maxLength":30,"type":"TEXT"},{"@type":".input.TextField","name":"last_name","title":"Last name","description":"Enter last name","errorMessage":"Last name must be english with at least two characters.","required":true,"regex":"^[a-zA-Z]+$","minLength":2,"maxLength":30,"type":"TEXT"},{"@type":".input.NewPasswordField","name":"newPassword","title":"Password","info":"The password must be a combination of lowercase letters, uppercase letters and English numbers and special characters such as (&, $, #, @, ^, % and...) and at least 8 and at most 20 characters.","description":"The value of the password is at least 8 digits and at most 20 digits,which must be a combination of lowercase letters and numbers (such as! Or @ or #, etc.)","errorMessage":"The entered password is not acceptable.","required":true,"regex":"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&-_+=()])(?=\\S+$).{8,20}$","minLength":8,"maxLength":50,"showConfirmPassword":true,"type":"NEW_PASSWORD"}],"forms":[]},"steps":5,"current":0,"fieldErrors":{},"errors":[]})
  }
}

