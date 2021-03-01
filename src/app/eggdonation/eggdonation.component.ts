import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpEventType } from "@angular/common/http";

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css']
})
export class EggdonationComponent implements OnInit {
  checked = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      self_age: ['', Validators.required],
      self_living: ['', Validators.required],
      self_cause: ['', Validators.required],
      self_ethnic: ['', Validators.required],
      self_genetic: ['', Validators.required],
      self_history: ['', Validators.required],
      self_medic: ['', Validators.required],
      father_age: ['', Validators.required],
      father_living: ['', Validators.required],
      father_cause: ['', Validators.required],
      father_ethnic: ['', Validators.required],
      father_genetic: ['', Validators.required],
      father_history: ['', Validators.required],
      father_medic: ['', Validators.required],
      mother_age: ['', Validators.required],
      mother_living: ['', Validators.required],
      mother_cause: ['', Validators.required],
      mother_ethnic: ['', Validators.required],
      mother_genetic: ['', Validators.required],
      mother_history: ['', Validators.required],
      mother_medic: ['', Validators.required],
      maternal_grandfather_age: ['', Validators.required],
      maternal_grandfather_living: ['', Validators.required],
      maternal_grandfather_cause: ['', Validators.required],
      maternal_grandfather_ethnic: ['', Validators.required],
      maternal_grandfather_genetic: ['', Validators.required],
      maternal_grandfather_history: ['', Validators.required],
      maternal_grandfather_medic: ['', Validators.required],
      maternal_grandmother_age: ['', Validators.required],
      maternal_grandmother_living: ['', Validators.required],
      maternal_grandmother_cause: ['', Validators.required],
      maternal_grandmother_ethnic: ['', Validators.required],
      maternal_grandmother_genetic: ['', Validators.required],
      maternal_grandmother_history: ['', Validators.required],
      maternal_grandmother_medic: ['', Validators.required],
      paternal_grandfather_age: ['', Validators.required],
      paternal_grandfather_living: ['', Validators.required],
      paternal_grandfather_cause: ['', Validators.required],
      paternal_grandfather_ethnic: ['', Validators.required],
      paternal_grandfather_genetic: ['', Validators.required],
      paternal_grandfather_history: ['', Validators.required],
      paternal_grandfather_medic: ['', Validators.required],
      paternal_grandmother_age: ['', Validators.required],
      paternal_grandmother_living: ['', Validators.required],
      paternal_grandmother_cause: ['', Validators.required],
      paternal_grandmother_ethnic: ['', Validators.required],
      paternal_grandmother_genetic: ['', Validators.required],
      paternal_grandmother_history: ['', Validators.required],
      paternal_grandmother_medic: ['', Validators.required],
      sibling1_age: ['', Validators.required],
      sibling1_living: ['', Validators.required],
      sibling1_cause: ['', Validators.required],
      sibling1_ethnic: ['', Validators.required],
      sibling1_genetic: ['', Validators.required],
      sibling1_history: ['', Validators.required],
      sibling1_medic: ['', Validators.required],
      sibling2_age: ['', Validators.required],
      sibling2_living: ['', Validators.required],
      sibling2_cause: ['', Validators.required],
      sibling2_ethnic: ['', Validators.required],
      sibling2_genetic: ['', Validators.required],
      sibling2_history: ['', Validators.required],
      sibling2_medic: ['', Validators.required],
      more_sibling_age: ['', Validators.required],
      more_sibling_living: ['', Validators.required],
      more_sibling_cause: ['', Validators.required],
      more_sibling_ethnic: ['', Validators.required],
      more_sibling_genetic: ['', Validators.required],
      more_sibling_history: ['', Validators.required],
      more_sibling_medic: ['', Validators.required],
      explain: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      non_medical_drugs: [0, Validators.required],
      tattoos: [0, Validators.required],
      clotting: [0, Validators.required],
      sexual_activity: [0, Validators.required],
      sex_1_4: [0, Validators.required],
      sex_12: [0, Validators.required],
      HIV_infection: [0, Validators.required],
      chronic: [0, Validators.required],
      dwelling: [0, Validators.required],
      exposed: [0, Validators.required],
      suspected: [0, Validators.required],
      received_blood: [0, Validators.required],
      history_positive: [0, Validators.required],
      cocaine: [0, Validators.required],
      unsure: [0, Validators.required],
      Alcoholism: [0, Validators.required],
      juvenile: [0, Validators.required],
      sex: [0, Validators.required],
      Gonorrhea: [0, Validators.required],
      Trichomonas: [0, Validators.required],
      HSV: [0, Validators.required],
      contaminate: [0, Validators.required],
      deferred: [0, Validators.required],
      Creutzfeldt: [0, Validators.required],
      pituitary_derived: [0, Validators.required],
      spent: [0, Validators.required],
      spent_Northern_Europe: [0, Validators.required],
      spent_more_years: [0, Validators.required],
      past_120: [0, Validators.required],
      close_contact_xenotransplantation: [0, Validators.required],
      malaria: [0, Validators.required],
      immunized: [0, Validators.required],
      smallpox: [0, Validators.required],
      diagnosed_following: [0, Validators.required],
      family_diagnosed: [0, Validators.required],
      exposed_radiation: [0, Validators.required],
      suspected_sepsis: [0, Validators.required],
      family_employed: [0, Validators.required],
      evidence_infection: [0, Validators.required],
      history_transmissible: [0, Validators.required],
      tested_infectious: [0, Validators.required],
      blood_transfusion: [0, Validators.required],
      sexual_partner: [0, Validators.required],
      excluded_blood_donation: [0, Validators.required],
      relatives_medical_history: [0, Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      reason_egg_donor: ['', Validators.required],
      say_intended_parents: ['', Validators.required],
      personal_goal: ['', Validators.required],
      achievement: ['', Validators.required],
      helped_community: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      anonymous_donation: ['', Validators.required],
      understand: ['', Validators.required],
      families_infertility: ['', Validators.required],
      deal_infertility: ['', Validators.required],
      describe_personality: ['', Validators.required],
      explanation_psychological: ['', Validators.required],
      history_abuse: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      imageUrl: ['', Validators.required],
      videoUrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      agree: ['', Validators.required],
      check: [false, Validators.required]
    });
  }

  imgSrc: String = '/assets/img/Upload_photos.png';
  vidSrc: String = '/assets/img/Upload_video.png';
  urls = [];
  Vurls = [];

  selectPhotos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (e: any) => {
          this.urls.push(e.target.resut);
        }
      }
    }
  }

  selectVideos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.Vurls.push(event.target.resut);
        }
      }
    }
  }

}
