'use client';

import { useState } from 'react';
import { Competition, competitionsData } from '@/data/competitions';
import { Award, Download, Trophy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CompetitionCard } from '@/components/competitions/competition-card';
import FAQ from '@/components/faq';
import HeroSection from '@/components/hero-section';

export default function CompetitionsPage() {
  const [selectedCompetition, setSelectedCompetition] =
    useState<Competition | null>(null);

  const handleOpenDialog = (competition: Competition) => {
    setSelectedCompetition(competition);
  };

  const handleDialogClose = () => {
    setSelectedCompetition(null);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <HeroSection
        src="/assets/images/2.jpg"
        title="Competitions"
        description="Explore the exciting challenges awaiting you. Click on any competition
          to view details and prize information."
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {competitionsData.map((competition) => (
            <CompetitionCard
              key={competition.id}
              competition={competition}
              onOpenDetails={handleOpenDialog}
            />
          ))}
        </div>
      </div>

      <FAQ />

      <Dialog
        open={!!selectedCompetition}
        onOpenChange={(isOpen) => !isOpen && handleDialogClose()}
      >
        <DialogContent className="sm:max-w-[650px] bg-card border-border text-card-foreground">
          {selectedCompetition && (
            <>
              <DialogHeader className="mb-4 pr-10">
                <DialogTitle className="text-2xl md:text-3xl font-semibold text-primary">
                  {selectedCompetition.name}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground pt-1">
                  {selectedCompetition.longDescription}
                </DialogDescription>
              </DialogHeader>

              {selectedCompetition.prizeWinner ||
              selectedCompetition.prizeRunnerUp ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center">
                      <Trophy size={16} className="mr-2 text-secondary" />{' '}
                      Winner Prize
                    </h4>
                    <p className="text-lg font-bold text-secondary">
                      {selectedCompetition.prizeWinner}
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg border border-border">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center">
                      <Award
                        size={16}
                        className="mr-2 text-muted-foreground/80"
                      />{' '}
                      Runner-up Prize
                    </h4>
                    <p className="text-lg font-bold text-foreground">
                      {selectedCompetition.prizeRunnerUp}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-muted/50 p-4 rounded-lg border border-border mb-6">
                  <p className="text-sm text-muted-foreground italic">
                    Prize details coming soon.
                  </p>
                </div>
              )}

              <DialogFooter className="mt-6 sm:justify-start">
                {selectedCompetition.detailsPdfUrl ? (
                  <Button asChild variant="secondary" size="lg">
                    <a
                      href={selectedCompetition.detailsPdfUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Full Guide
                    </a>
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground italic">
                    Detailed guide coming soon.
                  </p>
                )}
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
