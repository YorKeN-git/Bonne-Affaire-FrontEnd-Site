import { FormGroup } from '@angular/forms';

/**
 * 
 * @param mdp 
 * @param mdpConfirmer 
 */
export function concordanceMdp(mdp: string, mdpConfirmer: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[mdp];
        const matchingControl = formGroup.controls[mdpConfirmer];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // Stop si un autre validateur a déjà trouvé une erreur lors de la vérification
            return;
        }

        // Erreur lors de la vérification si non concordance des mdp
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ concordanceMdp: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}