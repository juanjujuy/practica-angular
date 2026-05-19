import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FiltroInscripcion } from "../filtro-inscripcion/filtro-inscripcion";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FiltroInscripcion],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {

  ngAfterViewInit(): void {

    const dropdownElementList =
      document.querySelectorAll('.dropdown-toggle');

    dropdownElementList.forEach((dropdownToggleEl) => {
      new bootstrap.Dropdown(dropdownToggleEl);
    });

  }
}
