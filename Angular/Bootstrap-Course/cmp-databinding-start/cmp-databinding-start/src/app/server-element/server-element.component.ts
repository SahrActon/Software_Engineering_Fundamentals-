import {
  AfterContentInit, AfterViewChecked, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {AfterContentChecked} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
  export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input ('serverElement') element: {type: string, name: string , content: string};
  @Input () name: string;
  @ViewChild ('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content:' +  this.header.nativeElement.textContent);
    console.log('Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }


  ngAfterContentInit() {
    console.log('ngDoCheck called');
    console.log('Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content:' +  this.header.nativeElement.textContent);
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ng on destroyed called');
  }

}
