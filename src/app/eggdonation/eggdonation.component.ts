import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-eggdonation',
  templateUrl: './eggdonation.component.html',
  styleUrls: ['./eggdonation.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class EggdonationComponent implements OnInit {
  checked = false;
  isLinear = false;
  percent: string;
  TotalSibling: number;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  siblingsFormGroup: FormGroup;
  medics: string[] = ['N/A', 'Blood', 'Heart', 'Respiratory', 'Gastrointestinal', 'Metabolic', 'Urinary', 'Reproductive', 'Neurological', 'Mental Health', 'Muscle/Bone/Joint', 'Skin Condition', 'Others'];

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    /* this.percent = "50%"; */
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
      explain: ['']
    });
    this.siblingsFormGroup= this._formBuilder.group({
      list_siblings: this._formBuilder.array([this.initListSiblings()],)
    });
    this.secondFormGroup = this._formBuilder.group({
      non_medical_drugs: ['', Validators.required],
      tattoos: ['', Validators.required],
      clotting: ['', Validators.required],
      sexual_activity: ['', Validators.required],
      sex_1_4: ['', Validators.required],
      sex_12: ['', Validators.required],
      HIV_infection: ['', Validators.required],
      chronic: ['', Validators.required],
      dwelling: ['', Validators.required],
      exposed: ['', Validators.required],
      suspected: ['', Validators.required],
      received_blood: ['', Validators.required],
      history_positive: ['', Validators.required],
      cocaine: ['', Validators.required],
      unsure: ['', Validators.required],
      Alcoholism: ['', Validators.required],
      juvenile: ['', Validators.required],
      sex: ['', Validators.required],
      Gonorrhea: ['', Validators.required],
      Trichomonas: ['', Validators.required],
      HSV: ['', Validators.required],
      contaminate: ['', Validators.required],
      deferred: ['', Validators.required],
      Creutzfeldt: ['', Validators.required],
      pituitary_derived: ['', Validators.required],
      spent: ['', Validators.required],
      spent_Northern_Europe: ['', Validators.required],
      spent_more_years: ['', Validators.required],
      past_120: ['', Validators.required],
      close_contact_xenotransplantation: ['', Validators.required],
      malaria: ['', Validators.required],
      immunized: ['', Validators.required],
      smallpox: ['', Validators.required],
      diagnosed_following: ['', Validators.required],
      family_diagnosed: ['', Validators.required],
      exposed_radiation: ['', Validators.required],
      suspected_sepsis: ['', Validators.required],
      family_employed: ['', Validators.required],
      evidence_infection: ['', Validators.required],
      history_transmissible: ['', Validators.required],
      tested_infectious: ['', Validators.required],
      blood_transfusion: ['', Validators.required],
      sexual_partner: ['', Validators.required],
      excluded_blood_donation: ['', Validators.required],
      relatives_medical_history: ['', Validators.required]
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

  urls = [];
  Vurls = [];

  selectPhotos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
      }
    }
  }

  selectVideos(event: any) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.Vurls.push(event.target.result);
        }
      }
    }
  }

  initListSiblings() {
    return this._formBuilder.group({
      add: [''],
      age: [''],
      living: [''],
      cause: [''],
      ethnic: [''],
      genetic: [''],
      history: [''],
      sibling_medic: ['']
    });
  }

  addNewRow() {
    const control = <FormArray>this.siblingsFormGroup.controls['list_siblings'];
    control.push(this.initListSiblings());
  }

  deleteRow(index: number) {
    const control = <FormArray>this.siblingsFormGroup.controls['list_siblings'];
    if (control != null) {
      this.TotalSibling = control.value.length;
    }
    if (this.TotalSibling > 1) {
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

}
