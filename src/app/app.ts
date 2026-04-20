import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hablar con el Agente IA';

  expandedFeature: number | null = null;
  expandedStep: number | null = null;

  toggleFeature(index: number) {
    this.expandedFeature = this.expandedFeature === index ? null : index;
  }

  toggleStep(index: number) {
    this.expandedStep = this.expandedStep === index ? null : index;
  }

  iniciarConversacion() {
    // Estrategia 1: Buscar botón dentro del Shadow DOM abierto
    if (this.tryClickShadowButton()) return;

    // Estrategia 2: Simular clic real en las coordenadas del widget
    this.simulateRealClick();
  }

  private tryClickShadowButton(): boolean {
    const widget = document.querySelector('elevenlabs-convai');
    if (!widget) return false;

    const shadow = widget.shadowRoot;
    if (!shadow) return false;

    // Buscar recursivamente en todos los shadow roots
    const button = this.findCallButton(shadow);
    if (button) {
      button.click();
      return true;
    }
    return false;
  }

  private findCallButton(root: ShadowRoot | Document | Element): HTMLElement | null {
    // Buscar botones directos
    const buttons = root.querySelectorAll('button, [role="button"]');
    for (const btn of Array.from(buttons)) {
      const text = (btn.textContent || '').toLowerCase();
      if (text.includes('start') || text.includes('call') || text.includes('iniciar') || text.includes('llamada')) {
        return btn as HTMLElement;
      }
    }

    // Buscar en shadow roots anidados
    const allElements = root.querySelectorAll('*');
    for (const el of Array.from(allElements)) {
      if (el.shadowRoot) {
        const found = this.findCallButton(el.shadowRoot);
        if (found) return found;
      }
    }

    return null;
  }

  private simulateRealClick() {
    const widget = document.querySelector('elevenlabs-convai');
    if (!widget) return;

    const rect = widget.getBoundingClientRect();

    // El botón "Start a call" está aproximadamente en el centro-inferior del widget
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.bottom - 30;

    // Simular secuencia completa de eventos de ratón sobre el elemento en esas coordenadas
    const eventOptions: MouseEventInit = {
      bubbles: true,
      cancelable: true,
      composed: true,
      clientX: targetX,
      clientY: targetY,
      view: window
    };

    // Encontrar el elemento real en esas coordenadas (penetra shadow DOM)
    const realTarget = document.elementFromPoint(targetX, targetY);
    const target = realTarget || widget;

    target.dispatchEvent(new MouseEvent('mouseover', eventOptions));
    target.dispatchEvent(new MouseEvent('mousedown', eventOptions));
    target.dispatchEvent(new MouseEvent('mouseup', eventOptions));
    target.dispatchEvent(new MouseEvent('click', eventOptions));

    // Pulsar efecto visual en nuestro botón como feedback
    this.pulseWidget();
  }

  private pulseWidget() {
    const widget = document.querySelector('elevenlabs-convai') as HTMLElement;
    if (!widget) return;

    // Animación de atención sobre el widget
    const originalTransform = widget.style.transform;
    widget.style.transition = 'transform 200ms ease';
    widget.style.transform = 'scale(1.1)';
    setTimeout(() => {
      widget.style.transform = originalTransform || '';
      setTimeout(() => { widget.style.transition = ''; }, 200);
    }, 300);
  }
}
