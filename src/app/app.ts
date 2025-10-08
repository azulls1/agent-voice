import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  title = 'Hablar con el Agente IA';

  @ViewChild('widgetHost', { static: false }) widgetHost!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    // Crea el elemento del widget
    const widgetEl = document.createElement('elevenlabs-convai');
    widgetEl.setAttribute('agent-id', 'agent_01jzhbdxm1e1q9grq89nevb297'); // ID del agente

    // Asegura que el script esté presente (por si falta en index.html)
    const scriptId = 'elevenlabs-convai-script';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      document.body.appendChild(s);
    }

    // Inserta el widget
    this.widgetHost.nativeElement.appendChild(widgetEl);
  }
}