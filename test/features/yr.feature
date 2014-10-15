@browser=chrome
Feature: Yr enkelt stedssøk

Scenario: Finn været i Oslo på YR-2014

    Når jeg starter yr2014 med Oslo i søkefeltet
    Så skal jeg se værmeldingen for Oslo
			
Scenario: Som bruker vil jeg at det skal komme forslag til steder, når jeg skriver i søkefeltet, slik at jeg raskt finner stedet jeg leter etter.

	Når jeg søker etter stedet "Berg"
	så skal "Berg" vises i søkeresultat
	så jeg skal kunne velge "Berg" fra søkelisten
