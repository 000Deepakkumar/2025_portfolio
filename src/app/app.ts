import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/common/hero/hero";
import { MyServices } from "./components/common/my-services/my-services";
import { MyExperince } from "./components/common/my-experince/my-experince";
import { MyProject } from "./components/common/my-project/my-project";

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Hero, MyServices, MyExperince, MyProject],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolia');
}
