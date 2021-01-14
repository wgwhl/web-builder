import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilitiesService } from '../../service/utilities.service';
import {MatAccordion} from '@angular/material/expansion';
import { BrandingState } from '../../mobx/BrandingStare';
import { ScreenState } from '../../mobx/screen/ScreenState.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  content: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(
    public utilities: UtilitiesService,
    public screen: ScreenState,
    public branding: BrandingState
  ) { }

  ngOnInit(): void {
    console.log(this.branding.content)
    this.content = this.branding.content;
  }

}
